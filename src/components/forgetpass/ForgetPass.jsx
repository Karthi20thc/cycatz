import React, { useState, useRef } from "react";
import "../../css/forgetpass.css";

const ForgetPass = () => {
	const [first, setfirst] = useState("");
	const emailRef = useRef();

	// functions
	// const closediv = () => {
	// 	const resetmsgEl = document.querySelector("resetmessage");
	// 	resetmsgEl.style.display = "none";
	// };

	const forgetpasshandler = (event) => {
		// const resetmsgEl = document.querySelector("resetmessage");
		event.preventDefault();
		setfirst(emailRef.current.value);
		// window.setTimeout(closediv, 3000);
	};

	return (
		<div className='forgetpasscon'>
			<form className='forgetpassword' onSubmit={forgetpasshandler}>
				<h2 className='formheading'>Cycatz</h2>
				<input
					className='forgetpassinput'
					required
					type='email'
					ref={emailRef}
					placeholder='Enter your Registered Email'
				/>
				{first && (
					<div className='resetmessage'>
						Password Reset Link has been sent to {first}{" "}
					</div>
				)}
				<button type='submit' className='resetbutton'>
					Reset Password
				</button>
			</form>
		</div>
	);
};

export default ForgetPass;
