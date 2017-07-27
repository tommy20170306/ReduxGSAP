import React from 'react';

import AdsGrid from './ads';

export default class Ads extends React.Component{

	render(){
		return(
			<div>
				<AdsGrid title={"Linux Package"} price={"21.45"} img={"/img/linux.png"} />
			</div>
		);
	}
}