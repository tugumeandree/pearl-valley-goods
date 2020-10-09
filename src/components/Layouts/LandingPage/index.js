import React from 'react';
import logo from '../../../assets/images/logo.png';
import './Landingpage.scss';
const index = () => {
	return (
		<div>
			<div className="bgimg">
				<div className="topleft">
					<img src={logo} alt="" />
				</div>
				<div className="middle">
					<h1>COMING SOON</h1>
					<hr />
					<h2 onClick={() => alert('A moment Please!')}>Get Started</h2>
				</div>
				<div className="bottomleft">
					<p>Your One Stop Online Shopping Center</p>
				</div>
			</div>
		</div>
	);
};

export default index;
