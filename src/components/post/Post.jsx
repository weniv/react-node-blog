import React from "react";
import { Link } from "react-router-dom";
import Author from "../author/Author";
import Category from "../category/Category";

import "./post.css";

export default function Post({ id, profileImg, title, children, img, userName, created, category }) {
	return (
		<Link to={`/view/${id}`} className="post">
			<article>
				<img src={process.env.PUBLIC_URL + img} alt="" />
				<div className="contents-wrap">
					<Category list={category} />
					<h3>{title}</h3>
					<Author userName={userName} created={created} profileImg={profileImg} />
					<p className="post-description">{children}</p>
				</div>
			</article>
		</Link>
	);
}
