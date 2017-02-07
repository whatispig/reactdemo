var React = require("react");
var HeaderUlLi = require("./HeaderUlLi.react");
var ButtonAndDiv = React.createClass({
	render: function(){
		var crous = {
			"数学":["数学1","数学2","数学3"],
			"语文":["语文1","语文2","语文3"],
			"英语":["英语1","英语2","英语3"]
		}
		var bb=[];
		var cc=[];
		for(var key in crous){
			bb.push(key);
			cc.push(crous[key]);
		}
		console.log(cc)
		return (
			<ul>
				<HeaderUlLi crous={bb[0]} child={cc[0]}/>
				<HeaderUlLi crous={bb[1]} child={cc[1]}/>
				<HeaderUlLi crous={bb[2]} child={cc[2]}/>
			</ul>
		);
	}
});
module.exports = ButtonAndDiv;
