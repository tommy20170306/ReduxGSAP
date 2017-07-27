import React from 'react';
import TweenMax from "gsap";
import Draggable from "gsap/Draggable";

import Card from './card';
import Hole from './hole';

export default class Play extends React.Component{
	componentDidMount(){
		let startX, startY;
		const c = console.log;

		document.querySelectorAll(".mcard").forEach((elm,index) => {
			Draggable.create(elm, {
				type: "x,y",
				edgeResistance: 0,
				bounds:"#outer-area",
				throwProps: true,
				cursor: "pointer",
				onPress: (props)=>{
					startX = elm.offsetLeft;
					startY = elm.offsetTop;
				},
				onRelease: (props)=>{
					let coor = elm.style.transform;
					coor = coor.replace("translate3d","").replace("(","").replace(")","").replace("px","");
					coor = coor.split(",");

					document.querySelectorAll(".mhole").forEach((hole,index) => {

						if(elm.textContent == hole.textContent){
							c("element left: "+ (elm.offsetLeft +parseInt(coor[0])));
							c("element top: "+(elm.offsetTop +parseInt(coor[1])));
							c("hole left: "+hole.offsetLeft);
							c("hole top: "+hole.offsetTop);

							c("Translate X: "+(parseInt(hole.offsetLeft) - parseInt(elm.offsetLeft)));
							c("Trablate Y: "+(parseInt(hole.offsetTop) - parseInt(elm.offsetTop)));
							c(`translate3d(${(parseInt(hole.offsetLeft) - parseInt(elm.offsetLeft))},${(parseInt(hole.offsetTop) - parseInt(elm.offsetTop))},0)`);

							if(
								Math.abs(elm.offsetLeft +parseInt(coor[0]) - hole.offsetLeft) < 20
								&& 
								Math.abs(elm.offsetTop +parseInt(coor[1]) - hole.offsetTop) < 20
							){
								elm.style.transform = `translate3d(
									${(parseInt(hole.offsetLeft) - parseInt(elm.offsetLeft))}px,
									${(parseInt(hole.offsetTop) - parseInt(elm.offsetTop))}px,
									0)`;
							}else{
								TweenMax.to(elm, 1, {
									x: 0,
									y: 0
								});
							}	
						}

					});

					
				}
			});
		});
	}

	render(){
		return (
			<div id="outer-area">
				<div>
					<Card text="K" color="green" />
					<Card text="Q" color="yellow" />
					<Card text="J" color="blue" />
					<Card text="A" color="red" />
				</div>
				<br />
				<div>
					<Hole text="A" />
					<Hole text="J" />
					<Hole text="Q" />
					<Hole text="K" />
				</div>
			</div>
		);
	}
}