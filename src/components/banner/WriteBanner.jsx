import React from "react";
import BannerWrap from "./BannerWrap";
export default function WriteBanner() {
	const dateInfo = Date().split(" ");
	let dateWeek = dateInfo[0];

	switch (dateWeek) {
		case "Tue":
			dateWeek = "Tuesday";
			break;
		case "Wed":
			dateWeek = "Wednesday";
			break;
		case "Thu":
			dateWeek = "Thursday";
			break;
		case "Sat":
			dateWeek = "Saturday";
			break;
		default:
			dateWeek = dateWeek + "day";
			break;
	}

	return (
		<BannerWrap>
			<div className="banner-contents">
				<p className="today">
					{dateInfo[1]}. <em>{dateInfo[2]}</em> {dateWeek}
				</p>
			</div>
		</BannerWrap>
	);
}
