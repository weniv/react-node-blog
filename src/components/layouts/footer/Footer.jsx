import React from "react";
import "./footer.css";

export default function Footer() {
	function handleScrollTop() {
		window.scrollTo({ top: 0, behavior: "smooth" });
	}
	return (
		<footer>
			<div className="max-width">
				<h2>©Weniv Corp.</h2>
				<button className="top-button" onClick={handleScrollTop}>
					TOP
				</button>
			</div>
		</footer>
	);
}
