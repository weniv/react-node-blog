import React from "react";
import { Link } from "react-router-dom";
import Author from "../author/Author";
import Category from "../category/Category";

import "./post.css";

export default function Post({ profileImg, title, children, img, userName, created }) {
	return (
		<Link to="/view" className="post">
			<article>
				<img src={img} alt="" />
				<div className="contents-wrap">
					<Category list={["Life", "Style"]} />
					<h3>{title}</h3>
					<Author userName={userName} created={created} profileImg={profileImg} />
					<p className="post-description">{children}</p>
				</div>
			</article>
		</Link>
	);
}
