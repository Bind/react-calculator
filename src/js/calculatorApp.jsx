
var React = require("react");
var calculatorStore = require("./calculatorStore");
var KeyInput = require("./KeyInput");

var validNumberInputs = ['.','0','1','2','3','4','5','6','7','8','9'].reverse()


function getCalculatorState(){
    return {
        display: calculatorStore.getDisplay()
    }
}

var CalculatorApp = React.createClass({
    getInitialState: function(){
        return getCalculatorState()
    },
    componentDidMount: function(){
        calculatorStore.addListener(this._onChange);
    },
    componentWillUnmount: function(){
        calculatorStore.removeListener(this._onChange);
    },
    render: function(){

        keyInputs = []
        for (var key in validNumberInputs){
            keyInputs.push(<KeyInput value={validNumberInputs[key]} /> )
        }
        console.log("render is being called");
        return (
            <div><p className="keyboardDisplay">{this.state.display}</p> 
            <div className="keyboardInputs">{keyInputs}</div>
            <div className="operandInputs">{}</div>
            </div>
            );
    },
    _onChange: function(){
        this.setState(getCalculatorState())
    }
})

/*
High Level Layout
<CalcApp>
    <CalcDisplay>[display]</CalcDisplay>
    <CalcNumberKeyboard>
        for number in inputs:
            <NumberKey>number</KeyBoardKey>
    </CalcKeyboard>
    </OperandKeybaord>
        for op in operands:
            <OperandKey>op</OperandKey>
    </OperandKey>
</CalcApp>

*/
module.exports = CalculatorApp;