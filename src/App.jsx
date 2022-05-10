import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./app.css";

// Layouts
import Footer from "./components/layouts/footer/Footer";
import Header from "./components/layouts/header/Header";
import Banner from "./components/layouts/banner/Banner";

// Pages
import Main from "./pages/main/Main";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Mypage from "./pages/mypage/Mypage";
import View from "./pages/view/View";
import Write from "./pages/write/Write";

// Profile Image
import profileImg from "./images/profile.jpg";

function App() {
	const isLogined = true;

	return (
		<BrowserRouter>
			<Header isLogined={isLogined} profileImg={profileImg} />
			<Banner />
			<Routes>
				<Route path="/" element={<Main profileImg={profileImg} />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="/mypage" element={<Mypage profileImg={profileImg} />} />
				<Route path="/view" element={<View profileImg={profileImg} />} />
				<Route path="/write" element={<Write />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
