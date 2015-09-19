var React = require("react");



KeyBoardInput = React.createClass({
    propTypes: {
        value: React.PropTypes.isRequired
    },
    componentDidMount: function(){},
    componentWillUnmount: function(){},
    render: function(){
        return (
                <div className="numberInput">{this.props.value}</div>
            )
    }

})

module.exports = KeyBoardInput