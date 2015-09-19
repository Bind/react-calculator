
var React = require("react");
var calculatorStore = require("./calculatorStore");


var CalculatorApp = React.createClass({
    getInitialState: function(){return null},
    componentDidMount: function(){
        calculatorStore.addListener(this._onChange);
    },
    componentWillUnmount: function(){
        calculatorStore.removeListener(this._onChange);
    },
    render: function(){
        console.log("render is being called");
        return (
            <div><h1>HELLO</h1> </div>
            );
    },
    _onChange: function(){
        console.log()
    }
})

module.exports = CalculatorApp;