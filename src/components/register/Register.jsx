import React, { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import "../../css/register.css";

// Redux
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../Redux/userRedux";

const Register = () => {
	//
	const [first, setfirst] = useState("Sign In");
	const history = useHistory();
	const dispatch = useDispatch();
	const emailRef = useRef();

	// Functions
	const formhandler = (event) => {
		event.preventDefault();
		setfirst("Fetching .....");
		dispatch(loginSuccess({ userEmail: emailRef.current.value }));
		history.push("/");
	};

	const forgetpasshandler = () => {
		history.push("/forgetPassword");
	};
	return (
		<div className='regcon'>
			<div className='register'>
				{/* 1 */}
				<div className='regtop'>
					<div className='topcon'>
						<h1 className='topheading'>Enjoy the cyber Security </h1>
						<h1 className='topheading'>Experience</h1>
						<ul className='links'>
							<li className='link'>Attack surface</li>
							<li className='link'>Breach Notification</li>
							<li className='link'>DarkWeb Monitoring</li>
							<li className='link'>Brand Monitoring</li>
							<li className='link'>Email Security</li>
							<li className='link'>Mobile Security</li>
						</ul>
					</div>
				</div>
				{/* 2*/}
				<div className='regbottom'>
					<h2 className='formheading'>Cycatz</h2>
					<form className='regform' onSubmit={formhandler}>
						<input
							type='email'
							placeholder='Enter your Email Address'
							className='reginput'
							required
							ref={emailRef}
						/>
						<input type='password' placeholder='password' className='reginput' required />
						<div className='forgetpass' onClick={forgetpasshandler}>
							Forget Password ?
						</div>
						<button className='regbutton' type='submit'>
							{first}
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Register;
