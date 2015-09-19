var appDispatcher = require("./appDispatcher");
var constants = require("./CalculatorConstants");

var CalculatorActions = {
    add_digit: function(number){
        appDispatcher.handleViewAction({
            actionType: constants.ADD_DIGIT,
            digit: number
        })
    },
    push_operand: function(operand){
        appDispatcher.handleViewAction({
            actionType: constants.PUSH_OPERAND,
            operand: operand
        })
    },
    push_stack: function(operand){
        appDispatcher.handleViewAction({
            actionType: constants.PUSH_STACK,
            operand: operand
        })
    },
    evaluate: function(){
        appDispatcher.handleViewAction({
            actionType: constants.EVALUATE,
        })
    }
};

module.exports = CalculatorActions;