import React from "react";
import "./home.css";
import MainHeader from "../../components/MainHeader";
import Program from "../../components/Program";
import Values from "../../components/Values";
import FAQs from "../../components/FAQs";
import Testimonial from "../../components/Testimonial";
import AdBanner from "../../components/AdBanner"
import FlexArm from "../../components/FlexArm"
// import Footer from "../../components/Footer";

const Home = () => {
	return (
		<>
			<MainHeader />
			<AdBanner />
			<FlexArm />
			<Program />
			<Values />
			<FAQs />
			<Testimonial />
			{/* <Footer /> comment this out so footer wount be double */}
		</>
	);
};

export default Home;
