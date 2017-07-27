import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {create_post} from '../../actions'; 

class PostsNew extends Component{

	constructor(props){
		super(props);
	}

	render(){
		return(
			<div>
				{this.newForm()}
			</div>
		);
	}

	newForm(){
		return (
			<form method="post" onSubmit={this.submitForm}>
				<div className="form-group">
					<label htmlFor="title">Title</label>
					<input name="title" id="title" className="form-control" required />
				</div>
				<div className="form-group">
					<label htmlFor="categories">Categories</label>
					<input name="categories" id="categories" className="form-control" required />
				</div>
				<div className="form-group">
					<label htmlFor="content">Content</label>
					<textarea name="content" id="content" className="form-control" rows="5" required />
				</div>
				<button type="submit" className="btn btn-primary">Send</button>
			</form>
		);
	}

	submitForm(e){
		e.preventDefault();

		let output = "{\n";
		document.querySelectorAll('form label + *').forEach( (in1) => {
			output += `"${in1.getAttribute('name')}":"${in1.value}",\n`;
		});
		output = output.substring(0, output.length - 2);
		output += "\n}";

		console.log(create_post(output));
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({create_post}, dispatch);
}

export default connect(null, mapDispatchToProps)(PostsNew);