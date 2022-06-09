import React from "react";
import "./banner.css";

export default function BannerWrap({ children }) {
	return (
		<div className="banner">
			<div className="max-width">{children}</div>
		</div>
	);
}
