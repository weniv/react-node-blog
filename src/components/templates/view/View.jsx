import React from "react";
import { Link, useLocation } from "react-router-dom";

import WrapBox from "../../layouts/wrap/WrapBox";
import Author from "../../author/Author";
import Category from "../../category/Category";

import "./view.css";
import PostBanner from "../../banner/PostBanner";

export default function View({ posts }) {
	const location = useLocation().pathname.slice(1);
	const post = posts.find((post) => post.id + "" === location.split("view/")[1]);

	return (
		<>
			<PostBanner post={post} />
			<div className="view">
				<div className="max-width">
					<WrapBox>
						<Author profileImg={post.profileImg} userName={post.userName} created={post.created} />
						<Category list={post.category} />
						<div className="title-wrap">
							<h2>{post.title}</h2>
							<button className="btn-like">Like</button>
						</div>
						<hr />
						<div className="view-contents">
							{post.contents.map((content, index) =>
								content.type === "p" ? <p key={"content" + index}>{content.text}</p> : <img key={"img" + index} src={process.env.PUBLIC_URL + content.src} alt="" />
							)}
						</div>
						<div className="btn-group">
							<Link to="#" className="btn-modify">
								<span className="a11y-hidden">modify</span>
							</Link>
							<button type="button" className="btn-delete">
								<span className="a11y-hidden">delete</span>
							</button>
						</div>
						<Link to="/" className="btn-back">
							<span className="a11y-hidden">Back</span>
						</Link>
					</WrapBox>
				</div>
			</div>
		</>
	);
}
