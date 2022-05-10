import React from "react";
import About from "../../components/layouts/about/About";
import Posts from "../../components/posts/Posts";

import "./main.css";

export default function Main({ profileImg }) {
	return (
		<main>
			<div className="max-width">
				<Posts profileImg={profileImg} />
				<About profileImg={profileImg} />
			</div>
		</main>
	);
}
