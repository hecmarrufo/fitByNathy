// rafce -> shortcut to create component and export
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, {useState} from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Home from "./pages/spa/home";
import { CurrencyContext } from './context/CurrencyContext';
import Contact from "./pages/contact/Contact";
import Gallery from "./pages/gallery/Gallery";
import NotFound from "./pages/notFound/NotFound";
import Plans from "./pages/plans/Plans";
import Trainers from "./pages/trainers/Trainers";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
	gsap.registerPlugin(ScrollTrigger) 
	const [usdPrices, setUsdPrices] = useState(null);
	document.addEventListener("DOMContentLoaded", (event) => {
		console.log("DOM fully loaded and parsed");
		
		// gsap.to(".nav", {
		// 	scrollTrigger: ".adbanner__container", // start animation when ".box" enters the viewport
		// 	backgroundColor:"darkgoldenrod",
		// 	immediateRender:false,
		// 	toggleActions: "restart none none reverse"
		// });
		ScrollTrigger.create({
			trigger:".adbanner__container",
			start:"top 100px",
			end:"bottom 100px",
			animation:gsap.to(".nav", {backgroundColor:"darkgoldenrod", immediateRender:false}),
			toggleActions:"restart none none reverse",
			preventOverlaps:true
		})

	});

	return (
		<CurrencyContext.Provider value={{ usdPrices, setUsdPrices }}>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route index element={<Home />} />
					<Route path="tienda" element={<Trainers />} />
					<Route path="contacto" element={<Contact />} />
					<Route path="galeria" element={<Gallery />} />
					<Route path="planes" element={<Plans />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</CurrencyContext.Provider>

	);
};

export default App;
