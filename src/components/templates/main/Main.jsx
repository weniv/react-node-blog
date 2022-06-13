import React from "react";

import BlogBanner from "../../banner/BlogBanner";
import About from "../../layouts/about/About";

import Posts from "../../posts/Posts";

import "./main.css";

export default function Main({ posts, users, blog }) {
	return (
		<>
			<BlogBanner blog={blog} />

			<main>
				<div className="max-width">
					<Posts posts={posts} />
					<About users={users} />
				</div>
			</main>
		</>
	);
}
