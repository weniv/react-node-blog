import React from "react";

import Input from "../../components/input/Input";
import Profile from "../../components/profile/Profile";
import WrapBox from "../../components/layouts/wrap/WrapBox";
import Button from "../../components/button/Button";

import "./mypage.css";
import BlogBanner from "../../components/banner/BlogBanner";

export default function Mypage({ user, blog }) {
	return (
		<>
			<BlogBanner blog={blog} />
			<div className="mypage">
				<div className="max-width">
					<WrapBox>
						<h2>Update Account</h2>
						<form>
							<ul>
								<li>
									<Profile profileImg={user.profileImg} />
								</li>
								<li>
									<Input label="Username" type="text" id="user-name" placeholder="Your name" value={user.name} readOnly />
								</li>
								<li>
									<Input label="Email" type="email" id="user-email" placeholder="ex) blog@blog.com" value={user.email} readOnly />
								</li>
								<li>
									<Input label="Password" type="password" id="user-pw" placeholder="6+ characters" />
								</li>
							</ul>
							<Button type="submit" fullWidth="fullWidth">
								UPDATE
							</Button>
						</form>
					</WrapBox>
				</div>
			</div>
		</>
	);
}
