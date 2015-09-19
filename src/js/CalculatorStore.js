'use strict';
var fluxStore = require("flux/utils").Store;
var assign = require("object-assign");
var appDispatcher = require("./appDispatcher");





var operationStack = []
/*
a stack will be built up until a user hits enter.
The stack will consist of either numbers or operations.
("+", "-","*","/","%") or '.',0,1,2,3,4,5,6,7,8,9]
*/

class calculatorStore extends fluxStore {

    __onDispatch(action){    
        switch(action.type){
            case "insert-action":
                //changeState(action.operand);
                this.__emitChange();
                break;
            case "solve-action":
                //evalue the stacks
                break;

            default:
                //noop
        }
    }
}
console.log("calculatorStore file was evaluated")
module.exports = new calculatorStore(appDispatcher);
