import React from "react";
import styled from "styled-components";

import WrapBox from "../WrapBox";
import BlogBanner from "../banner/BlogBanner";
import Input from "../Input";
import Profile from "../Profile";
import Button from "../Button";

export default function Mypage({ user, blog }) {
	return (
		<>
			<BlogBanner blog={blog} />
			<Div className="mypage">
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
			</Div>
		</>
	);
}

const Div = styled.div`
	@media (max-width: 1280px) {
		.wrap-box {
			margin: 0 0 auto auto;
		}
	}
`;