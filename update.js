
function updateModel(input,input1,model){
    const newBillAmount = input
    const newTipPercentage = input1
    const newTip = input*input1/100
    const newTotal = input + newTip
    
    return {
        ...model,
        billAmount: newBillAmount,
        tipPercentage: newTipPercentage,
        tip: newTip,
        total: newTotal,
        input: input,
        input1: input1
    }
}
//console.log(tipCalculator(500,20))
module.exports = {
    updateModel
}