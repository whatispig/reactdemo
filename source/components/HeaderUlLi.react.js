var React = require("react");
var Detail = require("./Detail.react");
var HeaderUlLi = React.createClass({
	getInitialState: function(){
		return {
			isHidden: true
		}
	},
	isHidden: function(){
		this.setState({
			isHidden: !this.state.isHidden
		});
	},
	render: function(){
		return (
			<li onClick={this.isHidden}>
				{this.props.crous}
				<Detail isHidden={this.state.isHidden} child={this.props.child}/>
			</li>
		);
	}
});
module.exports = HeaderUlLi;
