import React, { useState } from "react";

import "./app.css";

// Layouts
import Routers from "./Routers";
import Header from "./components/layouts/header/Header";
import Footer from "./components/layouts/footer/Footer";
import { useNavigate } from "react-router-dom";

// Data
const profileImg = "./assets/profile.jpg";

function App() {
	const navigate = useNavigate();

	const [isLogined, setIsLogined] = useState(localStorage.getItem("login"));

	function loginHandler() {
		if (isLogined) {
			setIsLogined(false);
			localStorage.removeItem("login");
		} else {
			setIsLogined(true);
			localStorage.setItem("login", "Chilli");
			navigate("/");
		}
	}

	return (
		<>
			<Header isLogined={isLogined} profileImg={profileImg} loginHandler={loginHandler} />
			<Routers isLogined={isLogined} loginHandler={loginHandler} />
			<Footer />
		</>
	);
}

export default App;
