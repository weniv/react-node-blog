import React from "react";
import { Route, Routes } from "react-router-dom";

import { MainPage, LoginPage, MyProfilePage, RegisterPage, PostViewPage, PostWritePage, NotFoundPage } from "./pages";

function Routers({ loginHandler, isLogined, data }) {
	return (
		<Routes>
			<Route path="/" element={<MainPage />} />
			<Route path="/register" element={<RegisterPage isLogined={isLogined} />} />
			<Route path="/login" element={<LoginPage isLogined={isLogined} loginHandler={loginHandler} />} />
			<Route path="/mypage" element={<MyProfilePage isLogined={isLogined} data={data} />} />
			<Route path="/write" element={<PostWritePage isLogined={isLogined} />} />
			<Route path="/view/:id" element={<PostViewPage />} />
			<Route path="*" element={<NotFoundPage />} />
		</Routes>
	);
}

export default Routers;
