import React from "react";

import "./banner.css";
function Banner({ type }) {
	const dateInfo = Date().split(" ");
	let week = dateInfo[0];
	switch (week) {
		case "Tue":
			week = "Tuesday";
			break;
		case "Wed":
			week = "Wednesday";
			break;
		case "Thu":
			week = "Thursday";
			break;
		case "Sat":
			week = "Saturday";
			break;
		default:
			week = week + "day";
			break;
	}
	return (
		<div className="banner">
			<div className="max-width">
				{type === "text" ? (
					<div className="banner-contents">
						<p className="sub-text">React &amp; Node</p>
						<p className="main-text">My BLOG</p>
						<p className="description">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis nostrum dolor provident beatae deserunt magnam, illo neque. Maiores ipsum commodi dolorum beatae aliquid laboriosam est,
						</p>
					</div>
				) : (
					type === "write" && (
						<div className="banner-contents">
							<p className="today">
								{dateInfo[1]}. <em>{dateInfo[2]}</em> {week}
							</p>
						</div>
					)
				)}
			</div>
		</div>
	);
}

export default Banner;
