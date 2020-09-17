import React, { useContext, useState } from "react";
import LoginWithOthers from "../LoginWithOthers/LoginWithOthers";
import "./Login.css";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../UserAuthentication/firebase.config";
import { UserContext } from "../../App";
import { useHistory, useLocation } from "react-router-dom";

const Login = () => {
	const [newUser, setNewUser] = useState(false);
	const [loggedInUser, setLoggedInUser] = useContext(UserContext);
	const [currentUser, setCurrentUser] = useState({
		isSignedIn: false,
		email: "",
		password: "",
		error: "",
		success: false,
	});

	const history = useHistory();
	const location = useLocation();
	const { from } = location.state || { from: { pathname: "/" } };

	if (!firebase.apps.length) {
		// Initialize Firebase
		firebase.initializeApp(firebaseConfig);
	}
	/* GOOGLE Sign in */
	const handleGoogleSignIn = () => {
		const provider = new firebase.auth.GoogleAuthProvider();
		firebase
			.auth()
			.signInWithPopup(provider)
			.then(function(result) {
				const { displayName, email } = result.user;
				const newUser = {
					isSignedIn: true,
					email: email,
					name: displayName,
				};
				setCurrentUser(newUser);

				setLoggedInUser(newUser);
				history.replace(from);
				console.log(newUser);
			})
			.catch(function(error) {
				const newUser = { ...currentUser };
				newUser.error = error.message;
				newUser.success = false;
				setLoggedInUser(newUser);
				console.log(error);
			});
	};

	/* FACEBOOK Sign in */
	const handleFacebookSignIn = () => {
		const provider = new firebase.auth.FacebookAuthProvider();
		firebase
			.auth()
			.signInWithPopup(provider)
			.then(function(result) {
				const { displayName, email } = result.user;
				const newUser = {
					isSignedIn: true,
					email: email,
					name: displayName,
				};
				setCurrentUser(newUser);

				setLoggedInUser(newUser);
				history.replace(from);
				console.log(newUser);
			})
			.catch(function(error) {
				const newUser = { ...currentUser };
				newUser.error = error.message;
				newUser.success = false;
				setLoggedInUser(newUser);
				console.log(error);
			});
	};

	const handleFormToggle = () => {
		setNewUser(!newUser);
	};

	const handleFormValidation = (e) => {
		if (e.target.name === "name") {
			console.log(e.target.value.length > 2);
		}
		if (e.target.name === "email") {
			console.log(/\S+@\S+/.test(e.target.value));
		}
		if (e.target.name === "password") {
			console.log(e.target.value > 5 && /\d{1}/.test(e.target.value));
		}
	};

	const handleFormSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<section className="tg-signup-login text-center">
			<div className="container">
				{loggedInUser.email && (
					<div className="alert alert-success" role="alert">
						User logged in successfully
					</div>
				)}
				{loggedInUser.error && (
					<div className="alert alert-danger" role="alert">
						{loggedInUser.error}
					</div>
				)}
				{newUser ? (
					<SignUpForm
						toggleUser={handleFormToggle}
						validation={handleFormValidation}
						submit={handleFormSubmit}
					></SignUpForm>
				) : (
					<LoginForm
						toggleUser={handleFormToggle}
						validation={handleFormValidation}
						submit={handleFormSubmit}
					></LoginForm>
				)}
				<LoginWithOthers google={handleGoogleSignIn} facebook={handleFacebookSignIn}></LoginWithOthers>
			</div>
		</section>
	);
};

export default Login;
