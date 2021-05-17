const chalk = require('chalk')
const figlet = require('figlet')
const inquirer = require('inquirer')

function title(){
    return chalk.magenta(
        figlet.textSync(
            'Tip Calculator App',
            {
                horizontalLayout: 'full',
                font: 'Soft'
            }
        )
    )
}

function table(model) {
    const {billAmount} = model
    const {tipPercentage} = model
    const {tip} = model
    const {total} = model
    return [
        {'Bill Amount': '$'+billAmount, 'Tip (%)': tipPercentage+'%', 'Tip' : '$'+tip, 'Total' : '$'+total}
    ]
}

function inputMoney(model) {
    const{input} = model
    const{input1} = model
    const message1 = 'Bill Amount?: '
    const message2 = 'Tip? (%)'
    return inquirer.prompt([
        {
            name: 'input',
            type: 'number',
            message: message1,
            default: input,
            validate: function(value){
                if (value>=0){
                    return true
                }
                else {
                    return 'Enter a positive number'
                }
            }
        },
        {
            name: 'input1',
            type: 'number',
            message: message2,
            default: input1,
            validate: function(value){
                if (value>=0){
                    return true
                }
                else {
                    return 'Enter a positive number'
                }
            }
        }
    ])

}


module.exports = {
    title,
    table,
    inputMoney
}