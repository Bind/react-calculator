var React = require("react");
var calculatorActions = require("./calculatorActions");
var constants = require("./CalculatorConstants");


console.log(constants)

KeyBoardInput = React.createClass({
    propTypes: {
        key: React.PropTypes.string,
        value: React.PropTypes.string
    },
    componentDidMount: function(){},
    componentWillUnmount: function(){},
    render: function(){
        return (
                <div className="operandInput" onClick={this._onClick}>{this.props.value}</div>
            )
    },
    _onClick: function(){
        console.log("doing some operand stuff")
        if (["*","/","+","-"].indexOf(this.props.value) > -1){
            calculatorActions.push_operand(this.props.value)
        } else if(this.props.value === "="){
            calculatorActions.evaluate()
        }
    }
})

module.exports = KeyBoardInput