var dispatcher = require("./dispatcher");
var assign = require("object-assign");

var appDispatcher = assign({}, dispatcher.prototype, {

    handleViewAction:function(action){
        this.dispatch({
            source:"VIEW_ACTION",
            action:action
        })
    }
})

module.exports = appDispatcher;