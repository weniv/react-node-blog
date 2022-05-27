import React from "react";
import Banner from "../../components/banner/Banner";
import About from "../../components/layouts/about/About";

import Posts from "../../components/posts/Posts";

import "./main.css";

export default function Main({ profileImg, categoriese, posts }) {
	return (
		<>
			<Banner type="text" />
			<main>
				<div className="max-width">
					<Posts posts={posts} />
					<About profileImg={profileImg} categoriese={categoriese} />
				</div>
			</main>
		</>
	);
}
