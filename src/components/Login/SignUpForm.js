import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

const SignUpForm = (props) => {
	const { toggleUser, validation, submit } = props;
	const [validated, setValidated] = useState(false);

	return (
		<div className="tg-form login signup">
			<h3>Create an account</h3>

			<form onSubmit={submit}>
				<div className="form-group">
					<input
						type="text"
						className="form-control"
						placeholder="Your Name"
						name="name"
						onBlur={validation}
					/>
				</div>
				<div className="form-group">
					<input type="email" className="form-control" placeholder="Email" name="email" onBlur={validation} />
					<div className="valid-feedback">Email looks good!</div>
				</div>
				<div className="form-group">
					<input
						type="password"
						className="form-control"
						placeholder="Password"
						name="password"
						onBlur={validation}
					/>
				</div>
				<div className="form-group">
					<input
						type="password"
						className="form-control"
						placeholder="Confirm Password"
						name="confirmPassword"
						onBlur={validation}
					/>
				</div>

				<button type="submit" className="btn btn-warning tg-primary btn-block">
					Create an account
				</button>
			</form>

			<div className="register-login">
				Already have an account?{" "}
				<button className="btn btn-logintoggle" onClick={toggleUser}>
					Login
				</button>
			</div>
		</div>
	);
};

export default SignUpForm;
