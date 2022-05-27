import React from "react";
import "./author.css";

export default function Author({ profileImg, userName, created }) {
	return (
		<dl className="author-wrap">
			<dt className="a11y-hidden">Author</dt>
			<dd className="author">
				<img src={process.env.PUBLIC_URL + profileImg} alt="" /> {userName}
			</dd>
			<dt className="a11y-hidden">Created</dt>
			<dd className="created">{created}</dd>
		</dl>
	);
}
