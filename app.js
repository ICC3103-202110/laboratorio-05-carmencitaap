const {title} = require('./view')
const {table} = require('./view')
const {printTable} = require('console-table-printer')

model = {
    billAmount: '$'+0,
    tipPercentage: 0+'%',
    tip: '$'+0,
    total: '$'+0,
    input1: 0
}

async function app(update, title, table) {
    console.log(title())
    printTable(table(model))
}

console.log(app(true, title,table))

