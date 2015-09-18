var dispatcher = require("./dispatcher");
var assign = require("objcet-assign");

var appDispatcher = assign({}, dispatcher.prototype, {

    handleViewAction:function(action){
        this.dispatch({
            source:"VIEW_ACTION",
            action:action
        })
    }
})

moduel.exports = appDispatcher;