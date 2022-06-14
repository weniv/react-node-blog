import React from "react";

import BannerWrap from "./BannerWrap";

export default function PostBanner({ post }) {
	const month = ["Jan.", "Feb.", "Mar.", "Apr.", "May", "Jun.", "Jul.", "August", "Sep.", "Oct.", "Nov.", "Dec."];
	const week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

	const postDate = new Date(post.created);
	const mainBg = post.mainBg;

	return (
		<BannerWrap mainBg={mainBg}>
			<div className="banner-contents">
				<p className="today">
					{month[postDate.getMonth()]} <em>{String(postDate.getDate()).padStart(2, "0")}</em> {week[postDate.getDay()]}
				</p>
			</div>
		</BannerWrap>
	);
}
