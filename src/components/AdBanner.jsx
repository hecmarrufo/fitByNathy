import React from "react";
import inactive_banner from "../images/inactive_banner.png";
import mobile_banner from "../images/ceroExcusasMobile.png";

const MainHeader = () => {
	return (
			<section className="adbanner__container" id="adbanner__container">
				<img src={inactive_banner}  alt="el reto" className="adbanner" />
				<img src={mobile_banner}  alt="el reto" className="adbanner_mobile" />
			</section>
	);
};

export default MainHeader;
