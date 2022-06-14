import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

import { COLORS } from "../../constants";

import WrapBox from "../WrapBox";
import Button from "../Button";
import Input from "../Input";
import BannerWrap from "../banner/BannerWrap";

export default function Login({ loginHandler }) {
	function handleOnSubmit(e) {
		e.preventDefault();
		loginHandler();
	}

	return (
		<>
			<BannerWrap />
			<WrapBox>
				<h2>Login</h2>
				<form onSubmit={handleOnSubmit}>
					<ul>
						<li>
							<Input label="Email" type="email" id="user-email" placeholder="ex) blog@blog.com" required />
						</li>
						<li>
							<Input label="Password" type="password" id="user-pw" placeholder="6+ characters" minLength={6} required />
						</li>
					</ul>
					<Button type="submit" fullWidth="fullWidth">
						Login
					</Button>
					<Anchor to="/register" className="link-underline">
						Register
					</Anchor>
				</form>
			</WrapBox>
		</>
	);
}

const Anchor = styled(Link)`
	display: block;
	width: 5em;
	text-align: center;
	text-decoration: underline;
	color: ${COLORS.gray};
	padding: 0.4rem 1rem;
	margin: 1rem 0 auto auto;
	transition: all 0.3s;

	&:hover {
		color: ${COLORS.main};
	}
`;
