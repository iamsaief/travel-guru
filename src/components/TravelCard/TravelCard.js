import React from "react";
import { Link } from "react-router-dom";

const TravelCard = (props) => {
	const { title, imgUrl, id } = props.travelCard;
	return (
		<div className="col-4">
			<Link to={`/booking/${id}`}>
				<div className="tg-hero-img">
					<img src={imgUrl} style={{ maxWidth: "100%" }} alt="" />
					<h3>{title}</h3>
				</div>
			</Link>
		</div>
	);
};

export default TravelCard;
