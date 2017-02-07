var React = require("react");
var Detail = React.createClass({
	render: function(){
		if(this.props.isHidden){
			return null;
		}
		return (
			<div>
				<p>{this.props.child[0]}</p>
				<p>{this.props.child[1]}</p>
				<p>{this.props.child[2]}</p>
			</div>
		);
	}
});
module.exports = Detail;
