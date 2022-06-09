import React from "react";
import BannerWrap from "./BannerWrap";

export default function BlogBanner({ blog }) {
	return (
		<BannerWrap>
			<div className="banner-contents">
				<p className="sub-text">{blog.subTitle}</p>
				<p className="main-text">{blog.mainTitle}</p>
				<p className="description">{blog.description}</p>
			</div>
		</BannerWrap>
	);
}
