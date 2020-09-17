import React from "react";
import { useHistory } from "react-router-dom";
import fakeData from "../../fakeData";
import TravelCard from "../TravelCard/TravelCard";
import "./Home.css";

const Home = () => {
	const history = useHistory();
	const travelCardData = fakeData.slice(0, 3);

	const handleBookingRoute = () => {
		history.push(`/booking/${travelCardData[0].id}`);
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
								{travelCardData.map((item) => (
									<TravelCard travelCard={item} key={item.id}></TravelCard>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};

export default Home;
