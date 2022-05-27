import React from "react";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";

import WrapBox from "../../components/layouts/wrap/WrapBox";
import Button from "../../components/button/Button";
import Input from "../../components/input/Input";
import Banner from "../../components/banner/Banner";

export default function Login({ loginHandler, isLogined }) {
	function handleOnSubmit(e) {
		e.preventDefault();
		loginHandler();
	}

	return (
		<>
			{isLogined ? (
				<Navigate to="/"></Navigate>
			) : (
				<>
					<Banner />
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
							<Link to="/register" className="link-underline">
								Register
							</Link>
						</form>
					</WrapBox>
				</>
			)}
		</>
	);
}
