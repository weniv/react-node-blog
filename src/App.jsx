import React, { useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import "./app.css";

// Layouts
import Footer from "./components/layouts/footer/Footer";
import Header from "./components/layouts/header/Header";
import Banner from "./components/layouts/banner/Banner";

// Pages
import Main from "./templates/main/Main";
import Login from "./templates/login/Login";
import Register from "./templates/register/Register";
import Mypage from "./templates/mypage/Mypage";
import View from "./templates/view/View";
import Write from "./templates/write/Write";

// Profile Image
import profileImg from "./images/profile.jpg";

const categoriese = ["Life","Style","Tech","Sport","Photo","Develop","Music"]
const posts = [
	{
		img:"",
		title:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse deserunt ducimus earum provident iste eaque dolores consequuntur? Dolor, voluptatem minima nobis ullam voluptate fugiat, idplaceat optio magni laborum iste!",
		profileImg:"",
		userName:"Chilli",
		created:"2022.04.01"
	},{
		img:"",
		title:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse deserunt ducimus earum provident iste eaque dolores consequuntur? Dolor, voluptatem minima nobis ullam voluptate fugiat, idplaceat optio magni laborum iste!",
		profileImg:"",
		userName:"Chilli",
		created:"2022.04.01"
	},{
		img:"",
		title:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse deserunt ducimus earum provident iste eaque dolores consequuntur? Dolor, voluptatem minima nobis ullam voluptate fugiat, idplaceat optio magni laborum iste!",
		profileImg:"",
		userName:"Chilli",
		created:"2022.04.01"
	},{
		img:"",
		title:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse deserunt ducimus earum provident iste eaque dolores consequuntur? Dolor, voluptatem minima nobis ullam voluptate fugiat, idplaceat optio magni laborum iste!",
		profileImg:"",
		userName:"Chilli",
		created:"2022.04.01"
	},{
		img:"",
		title:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse deserunt ducimus earum provident iste eaque dolores consequuntur? Dolor, voluptatem minima nobis ullam voluptate fugiat, idplaceat optio magni laborum iste!",
		profileImg:"",
		userName:"Chilli",
		created:"2022.04.01"
	},
]
function App() {
	// const isLogined = false;
	const [isLogined, setIsLogined] = useState(false)
	const url = useLocation().pathname.slice(1);
	const navigate = useNavigate()
	// useEffect(() => {
	// 	if (url) {
	// 		navigate("/")
	// 	}
	// }, [isLogined])
	function loginHandler() {
		setIsLogined((prevLoginState)=>!prevLoginState)
	}
	return (
		<>
			<Header isLogined={isLogined} profileImg={profileImg} loginHandler={loginHandler} />
			<Banner />
			<Routes>
				<Route path="/" element={<Main profileImg={profileImg} posts={posts} categoriese={categoriese} />} />
				<Route path="/login" element={<Login loginHandler={loginHandler} />} />
				<Route path="/register" element={<Register />} />
				<Route path="/mypage" element={<Mypage profileImg={profileImg} />} />
				<Route path="/view/:id" element={<View profileImg={profileImg} />} />
				<Route path="/write" element={<Write />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
