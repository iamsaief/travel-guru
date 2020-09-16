import React from "react";
import { useHistory } from "react-router-dom";
import Header from "../Header/Header";
import "./Home.css";

const Home = () => {
	const history = useHistory();
	const handleBookingRoute = () => {
		history.push("/booking");
	};
	return (
		<main className="tg-hero d-flex align-items-center">
			<div className="container">
				<div className="row">
					<div className="col-md-5">
						<div className="tg-hero-cta mb-md-0 mb-5">
							<h1>Cox's bazar</h1>
							<p>
								Cox's Bazar is a city, fishing port, tourism centre and district headquarters in
								southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it
								...
							</p>
							<button className="btn tg-primary" onClick={handleBookingRoute}>
								Booking <i className="fas fa-arrow-right"></i>
							</button>
						</div>
					</div>
					<div className="col-md-7">
						<div className="tg-hero-images">
							<div className="row">
								<div className="col-4">
									<div className="th-hero-img">
										<img
											src={require("../../images/image/Sajek.png")}
											style={{ maxWidth: "100%" }}
											alt=""
										/>
										<h3>Cox's Bazar</h3>
									</div>
								</div>
								<div className="col-4">
									<div className="th-hero-img">
										<img
											src={require("../../images/image/Sreemongol.png")}
											style={{ maxWidth: "100%" }}
											alt=""
										/>
										<h3>Cox's Bazar</h3>
									</div>
								</div>
								<div className="col-4">
									<div className="th-hero-img">
										<img
											src={require("../../images/image/Sundorbon.png")}
											style={{ maxWidth: "100%" }}
											alt=""
										/>
										<h3>Cox's Bazar</h3>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};

export default Home;
