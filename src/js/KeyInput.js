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
                <div className="numberInput" onClick={this._onClick}>{this.props.value}</div>
            )
    },
    _onClick: function(){
        calculatorActions.add_digit(this.props.value)
    }

})

module.exports = KeyBoardInput