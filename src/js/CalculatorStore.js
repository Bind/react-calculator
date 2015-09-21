'use strict';
var fluxStore = require("flux/utils").Store;
var assign = require("object-assign");
var appDispatcher = require("./appDispatcher");
var constants = require("./CalculatorConstants");

var currentDisplay = [];//NUmber being composed
var operationStack = [];
var justSet = false;
/*

a stack will be built up until a user hits enter.
The stack will consist of either numbers or operations.
("+", "-","*","/","%") or '.',0,1,2,3,4,5,6,7,8,9]
*/

var operatorFunctions = {"+": function(arr1, arr2){return parseFloat(arr1) + parseFloat(arr2);},
                         "-": function(arr1, arr2){return parseFloat(arr2) - parseFloat(arr1);},
                         "/": function(arr1, arr2){return parseFloat(arr2) / parseFloat(arr1);},
                         "*": function(arr1, arr2){return parseFloat(arr1) * parseFloat(arr2);}
}


class calculatorStore extends fluxStore {
    clearDisplay(){
        currentDisplay = [];
    }

    pushOperandToStack(operand){
        //do a check if operand is valid

        return operationStack.push(operand)
    }
    popOperandStack(){
        delete operationStack[operationStack.length-1]
    }
    pushDigit(number){
        if (!justSet){
            currentDisplay.push(number)
        } else {
            this.clearDisplay()
            currentDisplay.push(number)
            justSet = false;
        }
    }
    executeOperandStack(){
        console.log(operationStack)
        if (operationStack.length >= 3){
                console.log(operationStack)
                var arg1 = operationStack.pop()
                console.log(arg1)
                while (operationStack.length > 1){
                        console.log("HERE")
                        var op = operationStack.pop()
                        var arg2  = operationStack.pop()
                        if (op in operatorFunctions){
                             arg1 = operatorFunctions[op](arg1, arg2)
                        }
                    }
            console.log(arg1)
            return arg1
        }
    }
    getDisplay(){
        if (currentDisplay.length > 0){
            console.log(currentDisplay)
            return currentDisplay.join("");
        }
        else{
            return 0
        }
    }

    __onDispatch(action){    
        console.log(action)
        switch(action.actionType){
            case constants.PUSH_STACK:
                pushOperandToStack(action.operand)
                this.__emitChange();
                break;
            case constants.PUSH_OPERAND:
                this.pushOperandToStack(this.getDisplay());
                this.pushOperandToStack(action.operand);
                this.clearDisplay();
                console.log(operationStack)
                this.__emitChange();

                break;
            case constants.ADD_DIGIT:
                console.log(action)
                this.pushDigit(action.digit);
                console.log("Push digit occured")
                this.__emitChange();
                console.log("change event emitted")
                break;

            case constants.EVALUATE:
                this.pushOperandToStack(this.getDisplay());
                var result = this.executeOperandStack();
                this.clearDisplay()
                this.pushDigit(result)
                this.__emitChange();
                justSet = true;

                //evalue the stacks
                break;

            default:
                //noop
        }
    }
}
console.log("calculatorStore file was evaluated")
module.exports = new calculatorStore(appDispatcher);
