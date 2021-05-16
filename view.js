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
