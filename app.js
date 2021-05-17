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
    console.clear()
    console.log(title())
    printTable(table(model))
    while(true) { 
        const {input,input1} = await inputMoney(model)
        const newModel = updateModel(input,input1,model)
        printTable(table(newModel))
        //console.log(newModel)
    }
}

console.log(app(updateModel, title,table))

