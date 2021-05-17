const {title} = require('./view')
const {table} = require('./view')
const {inputMoney} = require('./view')
const {printTable} = require('console-table-printer')
const {updateModel} = require('./update')

model = {
    billAmount: 0,
    tipPercentage: 0,
    tip: 0,
    total: 0,
    input: 0,
    input1: 0
}

async function app(updateModel, title, table) {
    while (true) {
    console.log(title())
    printTable(table(model))
    const {input,input1} = await inputMoney(model)
    const newModel = updateModel(input,input1,model)
    console.log(title())
    printTable(table(newModel))
    }
}

console.log(app(updateModel, title,table))

