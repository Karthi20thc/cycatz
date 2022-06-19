import React from "react";
import "../../css/home.css";

// Redux
import { useSelector } from "react-redux";

const Home = () => {
	const userState = useSelector((state) => {
		return state.user;
	});
	return (
		<div className='homecon'>
			<div className='home'>
				<h1 className='homeheading'>Welcome to Cycatz</h1>
				<span className='welcomemail'>Hello {userState.currentUser} !!!</span>
			</div>
		</div>
	);
};

export default Home;
