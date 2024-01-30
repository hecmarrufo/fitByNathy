import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import React from "react";
import Logo from "../images/v-logo.png";
import CurrencySelector from "./CurrencySelector";
import { links } from "../data";
import { TbMenu2 } from "react-icons/tb";
import { MdOutlineClose } from "react-icons/md";
import "./navbar.css";

const Navbar = () => {
	const [isNavShowing, setIsNavShowing] = useState(false);

	const handleNavToggle = () => {
		return setIsNavShowing((prevVAlue) => {
			return !prevVAlue;
		});
	};

	return (
		<nav>
			<div className="container nav__container">
				<Link to="/" className="logo" onClick={handleNavToggle}>
					<img src={Logo} alt="Nav-logo" />
				</Link>
				<ul className={`nav__links ${isNavShowing ? "show__nav" : "hide__nav"}`}>
					{links.map(({ name, path }, index) => {
						return (
							<li key={index}>
								<NavLink
									to={path}
									className={({ isActive }) => (isActive ? "active-nav" : "")}
									onClick={handleNavToggle}
								>
									{name}
								</NavLink>
							</li>
						);
					})}
					<CurrencySelector/>
				</ul>
				<button onClick={handleNavToggle} className="nav__toggle-btn">
					{isNavShowing ? <MdOutlineClose /> : <TbMenu2 />}
				</button>
			</div>
		</nav>
	);
};

export default Navbar;

// export PATH=$PATH:/home/daveworld/bin
