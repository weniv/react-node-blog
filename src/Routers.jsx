import React from "react";
import { Route, Routes } from "react-router-dom";

// Pages
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import MyProfilePage from "./pages/MyProfilePage";
import RegisterPage from "./pages/RegisterPage";
import PostViewPage from "./pages/PostViewPage";
import PostWritePage from "./pages/PostWritePage";
import NotFoundPage from "./pages/NotFoundPage";

function Routers({ loginHandler, isLogined }) {
	return (
		<>
			<Routes>
				<Route path="/" element={<MainPage />} />
				<Route path="/register" element={<RegisterPage isLogined={isLogined} />} />
				<Route path="/login" element={<LoginPage isLogined={isLogined} loginHandler={loginHandler} />} />
				<Route path="/mypage" element={<MyProfilePage isLogined={isLogined} />} />
				<Route path="/write" element={<PostWritePage isLogined={isLogined} />} />
				<Route path="/view/:id" element={<PostViewPage />} />
				<Route path="*" element={<NotFoundPage />} />
			</Routes>
		</>
	);
}

export default Routers;
