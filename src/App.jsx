// rafce -> shortcut to create component and export
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, {useState} from "react";
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
	const [usdPrices, setUsdPrices] = useState(null);

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
