import React, {useContext} from "react";
import "./plans.css";
import { CurrencyContext } from '../../context/CurrencyContext';
import { plans } from "../../data";
import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_4.jpg";
import Card from "../../UI/Card";

const Plans = () => {
	const { usdPrices } = useContext(CurrencyContext);
	return (
		<>
			<Header title="Membership Plans" image={HeaderImage}>
				Et eu reprehenderit esse minim.Et eu reprehenderit esse minim. Et eu
				reprehenderit esse minim.
			</Header>
			<section className="plans">
				<div className="container plans__container">
					{plans.map(({ id, name, desc, features, price_usd, price_col, variable_price  }) => {
						return (
							<div key={id} className="plan">
								<h3>{name}</h3>
								<small>{desc}</small>
								{variable_price && (<div className="planes_desde">planes desde</div>)}								<h1>{`$${usdPrices ? price_usd : price_col}`}</h1>

								<h2>/{usdPrices ? 'USD' : 'COP'}</h2>
								<h4>Features</h4>
								{features.map(({ feature, available, index }) => {
									return (
										<p key={index} className={available ? "" : "disabled"}>
											{feature}
										</p>
									);
								})}
								<button className="btn lg">Choose Plan</button>
							</div>
						);
					})}
				</div>
			</section>
		</>
	);
};

export default Plans;
