import React from "react";
import { FaCrown } from "react-icons/fa";
import SectionHead from "./SectionHead";
import { programs } from "../data";
import Card from "../UI/Card";
import { Link } from "react-router-dom";
import { AiFillCaretRight } from "react-icons/ai";
import { FcApproval } from "react-icons/fc";


const Program = () => {
	return (
		<section className="programs">
			<div className="container programs container">
				<SectionHead icon={<FaCrown />} title="Programas" />

				<div className="program__wrapper">
					{programs.map(({ id, icon, title, info, path, type }) => {
						return (
							<Card className="programs__program" key={id}>
								<div className={type}>
									<FcApproval />
								</div>
								<span className="program__icon">{icon}</span>
								<h4>{title}</h4>
								<small>{info}</small>
								<Link to={path} className="btn sm">
									Ver Más <AiFillCaretRight />
								</Link>
							</Card>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default Program;
