import React from  'react';

export default class Card extends React.Component{
	render(){
		return(
			<div className={"mcard mcard-"+this.props.color}>{this.props.text}</div>
		);
	}
}