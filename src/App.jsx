import React, { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./app.css";

// Layouts
import Footer from "./components/layouts/footer/Footer";
import Header from "./components/layouts/header/Header";

// Pages
import Main from "./templates/main/Main";
import Login from "./templates/login/Login";
import Register from "./templates/register/Register";
import Mypage from "./templates/mypage/Mypage";
import View from "./templates/view/View";
import Write from "./templates/write/Write";

// Post data
import { posts } from "./data";
import NotFound from "./templates/NotFound";

// Profile Image
const profileImg = "./assets/profile.jpg";
const categoriese = ["Life", "Style", "Tech", "Sport", "Photo", "Develop", "Music"];

function App() {
	const [isLogined, setIsLogined] = useState(localStorage.getItem("login"));
	const location = useLocation().pathname.slice(1);

	function loginHandler() {
		if (isLogined) {
			setIsLogined(false);
			localStorage.removeItem("login");
		} else {
			setIsLogined(true);
			localStorage.setItem("login", true);
		}
	}

	return (
		<>
			<Header isLogined={isLogined} profileImg={profileImg} loginHandler={loginHandler} />
			<Routes>
				<Route path="/" element={<Main profileImg={profileImg} posts={posts} categoriese={categoriese} />} />
				<Route path="/login" element={<Login loginHandler={loginHandler} isLogined={isLogined} />} />
				<Route path="/register" element={<Register isLogined={isLogined} />} />
				<Route path="/mypage" element={<Mypage profileImg={profileImg} isLogined={isLogined} />} />
				<Route path="/view/:id" element={<View posts={posts} location={location} />} />
				<Route path="/write" element={<Write isLogined={isLogined} />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
