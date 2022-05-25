import React from "react";
import { Link,useNavigate } from "react-router-dom";

import WrapBox from "../../components/layouts/wrap/WrapBox";
import Button from "../../components/button/Button";
import Input from "../../components/input/Input";

export default function Login({loginHandler}) {
	const navigate = useNavigate()

	function handleOnSubmit(e) {
		e.preventDefault()
		loginHandler()
	}

	return (
		<>
			<WrapBox>
				<h2>Login</h2>
				<form onSubmit={handleOnSubmit}>
					<ul>
						<li>
							<Input label="Email" type="email" id="user-email" placeholder="ex) blog@blog.com" />
						</li>
						<li>
							<Input label="Password" type="password" id="user-pw" placeholder="6+ characters" />
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
	);
}
