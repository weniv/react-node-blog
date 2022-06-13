import React from "react";

import WrapBox from "../../layouts/wrap/WrapBox";
import Profile from "../../profile/Profile";
import Input from "../../input/Input";
import Button from "../../button/Button";
import BannerWrap from "../../banner/BannerWrap";

export default function Join() {
	return (
		<>
			<BannerWrap />
			<WrapBox>
				<h2>Register</h2>
				<form>
					<ul>
						<li>
							<Profile />
						</li>
						<li>
							<Input label="Username" type="text" id="user-name" placeholder="Your name" value="" />
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
