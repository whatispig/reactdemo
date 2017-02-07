var React = require("react");
var ButtonAndDiv = require("./ButtonAndDiv.react");
var Application = React.createClass({
	render: function(){
		return (
			<div className="header">
				<ButtonAndDiv/>
			</div>
		);
	}
});
module.exports = Application;
