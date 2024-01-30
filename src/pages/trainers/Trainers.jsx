import React, {useContext} from "react";
import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_5.jpg";
import { CurrencyContext } from '../../context/CurrencyContext';
import { BsInstagram } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { productos } from "../../data";
import Trainer from "../../components/Trainer";
import "./trainers.css";

const Trainers = () => {
	const { usdPrices } = useContext(CurrencyContext);
	return (
		<>
			<Header image={HeaderImage} title="Mi Tiendita" />
			<section className="trainers">
				<div className="container trainers__container">
					{productos.map(({ id, image, name, job, price_usd, price_col }) => {
						return (
							<Trainer
								key={id}
								image={image}
								name={name}
								job={job}
								usdPrices
								price={usdPrices ? price_usd : price_col}
							/>
						);
					})}
				</div>
			</section>
		</>
	);
};

export default Trainers;
