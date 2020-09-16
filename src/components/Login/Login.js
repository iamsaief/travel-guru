import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
	return (
		<section className="tg-signup-login">
			<div className="container">
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
						Don’t have an account? <Link to="/signup">Create an account</Link>
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

export default Login;
