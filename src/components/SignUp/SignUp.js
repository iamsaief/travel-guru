import React from "react";
import { Link } from "react-router-dom";

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

				<div className="form-divider text-center">
					<p>Or</p>
				</div>

				<div className="tg-thirdparty-login">
					<button className="btn btn-secondary">
						<span>
							<img src={require("../../images/icon/fb.png")} style={{ maxWidth: "35px" }} alt="fb logo" />
						</span>
						<span>Continue with Facebook</span>
					</button>
					<button className="btn btn-secondary">
						<span>
							<img
								src={require("../../images/icon/google.png")}
								style={{ maxWidth: "32px" }}
								alt="fb logo"
							/>
						</span>
						<span>Continue with Google</span>
					</button>
				</div>
			</div>
		</section>
	);
};

export default SignUp;
