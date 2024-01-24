import React from "react";
import { Link } from "react-router-dom";
import Image0 from "../images/IMG_4594-removebg-preview.png";
import Image1 from "../images/IMG_4598-removebg-preview.png";
import Image2 from "../images/IMG_4654-removebg-preview.png";
import Image3 from "../images/IMG_4676-removebg-preview.png";
import Image4 from "../images/IMG_4753-removebg-preview.png";
import Image5 from "../images/IMG_4812-removebg-preview.png";
import Image6 from "../images/IMG_4854-removebg-preview.png";
import Image7 from "../images/IMG_4906-removebg-preview.png";
import Image8 from "../images/IMG_4927-removebg-preview.png";
import Image9 from "../images/IMG_4933-removebg-preview.png";

const MainHeader = () => {
	return (
		<header className="main__header">
			<div className="container main__header-container">
				<div className="main__header-left">
					<h4>#UneteAlReto</h4>
					<h1>Vamos juntos por tu mejor versión</h1>
					<p>
						Soy tu entrenadora internacional, especializada en mujeres.
						<br></br>
						Certificada en nutrición fitness y deportiva.
					</p>
					<Link to="/planes" className="btn lg">
						Planes
					</Link>
				</div>
				<div className="main__header-right">
					<div className="main__header-circle"></div>
					<div className="main__header-image slideshow">
						<img src={Image0} alt="Nathaly header" className="action_img"/>
						<img src={Image1} alt="Nathaly header" className="action_img"/>
						<img src={Image9} alt="Nathaly header" className="action_img"/>
						<img src={Image3} alt="Nathaly header" className="action_img"/>
						<img src={Image4} alt="Nathaly header" className="action_img"/>
						<img src={Image5} alt="Nathaly header" className="action_img"/>
						<img src={Image6} alt="Nathaly header" className="action_img"/>
						<img src={Image7} alt="Nathaly header" className="action_img"/>
						<img src={Image2} alt="Nathaly header" className="action_img"/>
						<img src={Image8} alt="Nathaly header" className="action_img"/>
					</div>
				</div>
			</div>
		</header>
	);
};

export default MainHeader;
