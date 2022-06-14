import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { COLORS } from "../../constants";

import Button from "../Button";

// 이미지
import logo from "../../assets/Logo.svg";
import write from "../../assets/icon-modify-white.svg";
import logout from "../../assets/icon-logout.svg";
import login from "../../assets/icon-login.svg";
import register from "../../assets/icon-register.svg";

export function Header({ loginHandler, isLogined, profileImg }) {
	return (
		<HeaderWrap id="header">
			<div className="max-width">
				<h1>
					<Link to="/">
						<img src={logo} alt="My Blog" />
					</Link>
				</h1>
				<ul>
					{isLogined ? (
						<>
							{/* 로그인 */}
							<li className="profile-img">
								<Link to="/mypage">
									<img src={process.env.PUBLIC_URL + profileImg} alt="My Page" />
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
		</HeaderWrap>
	);
}

const HeaderWrap = styled.header`
	background: ${COLORS.white};

	.max-width {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 4rem;
		padding: 1rem 0;
	}
	h1 {
		font-size: 3rem;
		a {
			display: block;
			padding: 0.4rem;
			margin-left: -0.4rem;
			img {
				display: block;
			}
		}
	}

	ul {
		display: flex;
		align-items: center;
		gap: 1rem;
	}
	.profile-img {
		a {
			width: 4.4rem;
			height: 4.4rem;
			display: block;
			border-radius: 50%;
		}
		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}

	.button {
		text-transform: none;
	}

	@media (max-width: 640px) {
		.only-pc {
			display: none;
		}
		.button {
			width: 4.4rem;
			height: 4.4rem;
			padding: 0;
			border-radius: 50%;

			span {
				overflow: hidden;
				position: absolute;
				clip: rect(0, 0, 0, 0);
				width: 1px;
				height: 1px;
				margin: -1px;
				border: 0;
				padding: 0;
			}
		}
	}
`;
