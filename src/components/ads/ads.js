import React from 'react';
import TweenMax, {TimelineLite} from "gsap";

export default class AdsGrid extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			title: "Test"
		};
	}

	componentDidMount(){
		let t1 = new TimelineLite({
			onComplete: () => {
				t1.restart();
			}
		});
		t1.from('.r1', 0, {left:100, scale:3, opacity:0},0);
		t1.from('.r2', 0, {left:100, scale:0.1, opacity:0},1);
		t1.from('.r3', 0, {left:100, scale:20, opacity:0},0);
		t1.to('.r1', 2, {left:0, scale:1, opacity:1},1);
		t1.to('.r2', 2, {left:0, scale:1.1, opacity:1},1);
		t1.to('.r3', 5, {left:0, scale:1, opacity:1, rotate:360},2);
		t1.to('.r1', 2, {scale:2, opacity:0},5);
		t1.to('.r2', 2, {scale:2, opacity:0},5);
		t1.to('.r3', 2, {scale:2, opacity:0},5);
		t1.to('.ads_wrapper', 1, {border: '1px dashed black'}, 3);
	}

	render(){
		return(
			<div>
				<small>Ads</small>
				<div className="ads_wrapper">
					<br />
					<p className="r1">{this.props.title}</p>
					<img className="r2" src={this.props.img} alt={this.props.title} />
					<br/>
					<p className="r3">{"@"+this.props.price}</p>
				</div>
			</div>
		);
	}
}
