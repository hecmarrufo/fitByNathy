import React from "react";
import Card from "../UI/Card";

const Trainer = ({ image, name, job, price, usdPrices }) => {
	return (
		<Card className="trainer">
			<div className="trainer__img">
				<img src={image} alt={name} />
			</div>
			<h3>{name}</h3>
			<p>{job}</p>
			<p>{price}</p>
		</Card>
	);
};

export default Trainer;
