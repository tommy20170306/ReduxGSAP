import React from  'react';

export default class Hole extends React.Component{
	render(){
		return(
			<div className={"mhole mhole-"+this.props.color}>{this.props.text}</div>
		);
	}
}