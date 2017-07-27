import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import _ from 'lodash';
import {TweenMax} from 'gsap';
import {fetch_posts} from '../../actions';

class App extends Component {

	componentDidMount(){
		this.props.fetch_posts();
	}

	componentDidUpdate(){
		TweenMax.staggerFromTo(".list-group-item", 0.53 , 
		{opacity:0, scale: 0},
		{opacity:1, scale: 1, rotation: 360},
		0.3);

		document.querySelectorAll(".list-group-item").forEach((elm,index) => {
			elm.onmouseenter = function(){
				elm.style.backgroundColor = "#eee";
			};

			elm.onmouseleave = () => {
				elm.style.backgroundColor = "transparent";
			}
		});
	}

	render() {	  
	  return (
	  	<div>
	  		<a href="/posts/new" className="clearfix clearfix"><button className="btn float-right">New</button></a>
		    <ul className="list-group">
		    	{this.renderPosts()}
		    </ul>
	    </div>
	  );
	}

	renderPosts(){
		return _.map(this.props.posts.data, (post) => {
			return (
				<li className="list-group-item" key={post.id}>
					<small># {post.id}</small> <br/>
					<h3>{post.title}</h3>
					{post.content} <br/>
					<i><small>{post.categories}</small></i>
				</li>
			);
		});
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({fetch_posts}, dispatch);
}

function mapStatesToProps(state){
	return{
		posts: state.posts
	}
}

export default connect(mapStatesToProps, mapDispatchToProps)(App);