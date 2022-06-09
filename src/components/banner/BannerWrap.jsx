import React from "react";
import "./banner.css";

export default function BannerWrap({ children, mainBg }) {
	return (
		<div className="banner" style={mainBg && { backgroundImage: `url(${process.env.PUBLIC_URL + mainBg})` }}>
			<div className="max-width">{children}</div>
		</div>
	);
}
