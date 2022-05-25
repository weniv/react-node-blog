import React from "react";
import { Link } from "react-router-dom";

import "./header.css";
import Button from "../../button/Button";

// 이미지
import logo from "../../../images/Logo.svg";
import write from "../../../images/icon-modify-white.svg";
import logout from "../../../images/icon-logout.svg";
import login from "../../../images/icon-login.svg";
import register from "../../../images/icon-register.svg";

export default function Header({ loginHandler, isLogined, profileImg }) {
	return (
		<header id="header">
			<div className="max-width">
				<h1>
					<Link to="/">
						<img src={logo} alt="My Blog" />
					</Link>
				</h1>
				<ul>
					{isLogined ? (
						<>
							{/* 로그인*/}
							<li className="profile-img">
								<Link to="/mypage">
									<img src={profileImg} alt="My Page" />
								</Link>
							</li>
							<li>
								<Button href="/write">
									<img src={write} alt="" />

									<span>Write</span>
								</Button>
							</li>
							<li>
								<Button color="white" onClick={loginHandler}>
									<img src={logout} alt="" />
									<span>Logout</span>
								</Button>
							</li>
						</>
					) : (
						<>
							{/* 로그아웃 */}
							<li>
								<Button href="/login" color="gray">
									<img src={login} alt="" />
									<span>Login</span>
								</Button>
							</li>
							<li className="only-pc">
								<Button href="/register" color="gray">
									<img src={register} alt="" />
									<span>Register</span>
								</Button>
							</li>
						</>
					)}
				</ul>
			</div>
		</header>
	);
}
