var dispatcher = require("flux/lib/Dispatcher");
var assign = require("object-assign");


var appDispatcher = new dispatcher;
appDispatcher.handleViewAction = function(action){
        this.dispatch(
           action
        )
    }
module.exports = appDispatcher;