const chalk = require('chalk')
const figlet = require('figlet')

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
        {'Bill Amount': billAmount, 'Tip (%)': tipPercentage, 'Tip' : tip, 'Total' : total}
    ]
}


module.exports = {
    title,
    table,
}