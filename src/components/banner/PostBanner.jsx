import React from "react";

import "./banner.css";

export default function PostBanner({ post }) {
	const postDate = new Date(post.created);
	const week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	const month = ["Jan.", "Feb.", "Mar.", "Apr.", "May", "Jun.", "Jul.", "August", "Sep.", "Oct.", "Nov.", "Dec."];
	const createdMonth = month[postDate.getMonth()];
	const createdDay = String(postDate.getDate()).padStart(2, "0");
	const createdWeek = week[postDate.getDay()];

	return (
		<div className="banner" style={{ backgroundImage: `url(${post.mainBg})` }}>
			<div className="max-width">
				<div className="banner-contents">
					<p className="today">
						{createdMonth} <em>{createdDay}</em> {createdWeek}
					</p>
				</div>
			</div>
		</div>
	);
}
