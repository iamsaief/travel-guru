import React from "react";
import { Link } from "react-router-dom";

const LoginForm = (props) => {
	const { toggleUser, validation, submit } = props;

	return (
		<div className="tg-form login">
			<h3>Login</h3>
			<div className="form-group">
				<input type="email" className="form-control" placeholder="Email" />
			</div>
			<div className="form-group">
				<input type="password" className="form-control" placeholder="Password" />
			</div>
			<div className=" form-group forgot-pass">
				<div className="custom-control custom-checkbox mr-sm-2">
					<input type="checkbox" className="custom-control-input" id="rememberUser" />
					<label className="custom-control-label" htmlFor="rememberUser">
						Remember me
					</label>
				</div>
				<Link to="/" className="forgot-passowrd">
					Forgot Password
				</Link>
			</div>
			<button type="submit" className="btn btn-warning tg-primary btn-block">
				Login
			</button>
			<div className="register-login">
				Don’t have an account? {/* <Link to="/signup">Create an account</Link> */}
				<button className="btn btn-logintoggle" onClick={toggleUser}>
					Create an account
				</button>
			</div>
		</div>
	);
};

export default LoginForm;
