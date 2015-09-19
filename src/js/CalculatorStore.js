'use strict';
var fluxStore = require("flux/utils").Store;
var assign = require("object-assign");
var appDispatcher = require("./appDispatcher");


var currentDisplay = [];//NUmber being composed
var operationStack = [];
/*
a stack will be built up until a user hits enter.
The stack will consist of either numbers or operations.
("+", "-","*","/","%") or '.',0,1,2,3,4,5,6,7,8,9]
*/



class calculatorStore extends fluxStore {

    pushOperandToStack(operand){
        //do a check if operand is valid
        return operationStack.append(operand)
    }
    popOperandStack(){
        delete operationStack[operationStack.length-1]
    }
    executeOperandStack(){
        //tbd
    }
    getDisplay(){
        if (currentDisplay.length > 1){
            return currentDisplay.join("");
        }
        else{
            return 0
        }
    }

    __onDispatch(action){    
        switch(action.type){
            case "push-action":
                pushOperandToStack(action.operand)
                this.__emitChange();
                break;
            case "pop-action":
                popOperandStack();
                this.__emitChange();
                break;
            case "execute-action":
                executeOperandStack();
                this.__emitChange();
                //evalue the stacks
                break;

            default:
                //noop
        }
    }
}
console.log("calculatorStore file was evaluated")
module.exports = new calculatorStore(appDispatcher);
