import React from "react";
import { Link } from "react-router-dom";
import LoginWithOthers from "../LoginWithOthers/LoginWithOthers";

const SignUp = () => {
	return (
		<section className="tg-signup-login">
			<div className="container">
				<div className="tg-form login signup">
					<h3>Create an account</h3>

					<div className="form-group">
						<input type="text" className="form-control" placeholder="First Name" />
					</div>
					<div className="form-group">
						<input type="text" className="form-control" placeholder="Last Name" />
					</div>
					<div className="form-group">
						<input type="email" className="form-control" placeholder="Email" />
					</div>
					<div className="form-group">
						<input type="password" className="form-control" placeholder="Password" />
					</div>
					<div className="form-group">
						<input type="password" className="form-control" placeholder="Confirm Password" />
					</div>

					<button type="submit" className="btn btn-warning tg-primary btn-block">
						Create an account
					</button>
					<div className="register-login">
						Already have an account? <Link to="/login">Login</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SignUp;
