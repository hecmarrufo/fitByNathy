import React from "react";
import inactive_banner from "../images/inactive_banner.png";
// import active_banner from "../images/active_banner.png";

const MainHeader = () => {
	return (
			<section className="adbanner__container" id="adbanner__container">
				<img src={inactive_banner}  alt="el reto" className="adbanner" />
				{/* <img src={active_banner}  alt="el reto" className="adbanner" /> */}
			</section>
	);
};

export default MainHeader;
