import React from "react";

import BlogBanner from "../../components/banner/BlogBanner";
import About from "../../components/layouts/about/About";

import Posts from "../../components/posts/Posts";

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
