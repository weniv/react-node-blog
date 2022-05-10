import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

export default function Footer() {
	return (
		<footer>
			<div className="max-width">
				<h2>©Wenaiv Corp.</h2>
				<Link to="#header" className="top-button">
					TOP
				</Link>
			</div>
		</footer>
	);
}
