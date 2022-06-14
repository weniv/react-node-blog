import React from "react";
import styled from "styled-components";

import BlogBanner from "../banner/BlogBanner";
import { About } from "../layouts";

import Posts from "../Posts";

export default function Main({ posts, users, blog }) {
	return (
		<>
			<BlogBanner blog={blog} />

			<MainWrap>
				<div className="max-width">
					<Posts posts={posts} />
					<About users={users} />
				</div>
			</MainWrap>
		</>
	);
}

const MainWrap = styled.main`
	.max-width {
		display: flex;
		flex-direction: row-reverse;
		gap: 2.4rem;
		position: relative;
	}

	@media (max-width: 1024px) {
		.max-width {
			flex-direction: column;
		}
	}
`;
