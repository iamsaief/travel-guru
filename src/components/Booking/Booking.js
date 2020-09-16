import React from "react";
import { useHistory } from "react-router-dom";
import "../Home/Home.css";

const Booking = () => {
	const history = useHistory();
	const handleLoginRoute = () => {
		history.push("/login");
	};

	return (
		<main className="tg-hero d-flex align-items-center">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-6">
						<div className="tg-hero-cta mb-md-0 mb-5">
							<h1>Cox's bazar</h1>
							<p>
								Cox's Bazar is a city, fishing port, tourism centre and district headquarters in
								southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it
								...
							</p>
						</div>
					</div>
					<div className="col-lg-6">
						<div className="tg-booking-form">
							<div className="">
								<div className="form-group">
									<label>Origin</label>
									<input type="text" className="form-control" placeholder="e.g Dhaka" />
								</div>
								<div className="form-group">
									<label>Destination</label>
									<input type="text" className="form-control" placeholder="e.g Cox’s Bazar" />
								</div>
								<div className="form-group row booking-date">
									<div className="col-6">
										<label htmlFor="date-input">From</label>
										<input className="form-control" type="date" id="dateFrom" />
									</div>
									<div className="col-6">
										<label htmlFor="dateTo">To</label>
										<input className="form-control" type="date" id="dateTo" />
									</div>
								</div>
								<button
									onClick={handleLoginRoute}
									type="submit"
									className="btn btn-warning tg-primary btn-block"
								>
									Start Booking
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};

export default Booking;
