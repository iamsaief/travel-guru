import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Booking from "./components/Booking/Booking";
import SignUp from "./components/SignUp/SignUp";

function App() {
	return (
		<Router>
			<Header></Header>
			<Switch>
				<Route exact path="/">
					<Home></Home>
				</Route>
				<Route path="/login">
					<Login></Login>
				</Route>
				<Route path="/signup">
					<SignUp></SignUp>
				</Route>
				<Route path="/booking">
					<Booking></Booking>
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
