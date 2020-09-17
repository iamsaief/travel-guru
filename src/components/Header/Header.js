import React from "react";
import "./Header.css";
import { Button, Form, FormControl, Nav, Navbar } from "react-bootstrap";
import logo from "../../images/logo.png";
import { Link, useHistory } from "react-router-dom";

const Header = () => {
	const history = useHistory();
	const handleLoginRoute = () => {
		history.push("/user");
	};
	return (
		<Navbar bg="light" expand="md">
			<div className="container-lg">
				<Link to="/" className="navbar-brand mr-md-5 mr-0">
					<div className="logo">
						<img src={logo} style={{ maxWidth: "120px" }} alt="logo dark" />
					</div>
				</Link>
				<div className="tg-search">
					<FormControl type="search" placeholder="Search" className="mr-sm-2" />
				</div>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ml-auto align-items-md-center">
						<Link to="/" className="nav-link mr-lg-5 mr-0">
							Home
						</Link>
						<Link to="/destination" className="nav-link mr-lg-5 mr-0">
							Destination
						</Link>
						<Button className="btn btn-warning tg-primary" onClick={handleLoginRoute}>
							Login
						</Button>
					</Nav>
				</Navbar.Collapse>
			</div>
		</Navbar>
	);
};

export default Header;
