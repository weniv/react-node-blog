import React from "react";

import WrapBox from "../../components/layouts/wrap/WrapBox";
import Profile from "../../components/profile/Profile";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";

export default function Join() {
	return (
		<>
			<WrapBox>
				<h2>Register</h2>
				<form>
					<ul>
						<li>
							<Profile />
						</li>
						<li>
							<Input label="Username" type="text" id="user-name" placeholder="" value="" />
						</li>
						<li>
							<Input label="Email" type="email" id="user-email" placeholder="ex) blog@blog.com" value="" />
						</li>
						<li>
							<Input label="Password" type="password" id="user-pw" placeholder="6+ characters" value="" />
						</li>
					</ul>
					<Button fullWidth="fullWidth">Register</Button>
				</form>
			</WrapBox>
		</>
	);
}
