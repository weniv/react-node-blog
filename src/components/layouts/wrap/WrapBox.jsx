import React from "react";

import "./wrapbox.css";

export default function WrapBox({ children }) {
	return (
		<section className="wrap-box">
			<div className="inner">{children}</div>
		</section>
	);
}
