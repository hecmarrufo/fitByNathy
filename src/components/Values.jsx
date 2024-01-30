import React from "react";
import Image from "../images/values.jpg";
import Video from "../images/vid-valores-copy.mp4"
import SectionHead from "./SectionHead";
import { GiCutDiamond } from "react-icons/gi";
import { values } from "../data";
import Card from "../UI/Card";

const Values = () => {
	return (
		<section className="values">
			<div className="container values__container">
				<div className="values__left">
					<div className="values__image">
						<video autoPlay playsInline muted loop preload poster={Image}>
							<source src={Video} />
						</video>
					</div>
				</div>
				<div className="values__right">
					<SectionHead icon={<GiCutDiamond />} title="Brillemos juntos!" />
					<p>
						Todos mis programas vienen acompañados de increíbles beneficios
					</p>
					<div className="values__wrapper">
						{values.map(({ id, icon, title, desc }) => {
							return (
								<Card className="values__value" key={id}>
									<span>{icon}</span>
									<h4>{title}</h4>
									<small>{desc}</small>
								</Card>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Values;
