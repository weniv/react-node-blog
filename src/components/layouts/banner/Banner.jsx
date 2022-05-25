import React,{useState,useEffect} from "react";
import { useLocation } from "react-router-dom";

import "./banner.css";

import img from "../../../images/background.jpg";
import img2 from "../../../images/img2.jpg";

export default function Banner() {
	const dateInfo = Date().split(" ")
	const url = useLocation().pathname.slice(1);
	const [bannerImg, setBannerImg] = useState(img)
	useEffect(() => {
		setBannerImg(url==="view"?img2:img)
	}, [url])

	return (
		<div className="banner" style={{ backgroundImage: `url(${bannerImg})` }}>
			<div className="max-width">
				{url === "view" || url === "write" ? (
					<div className="banner-contents">
						<p className="today">
							{dateInfo[1]}. <em>{dateInfo[2]}</em> {dateInfo[0]}
						</p>
					</div>
				) : (
					(url === "" || url === "mypage") && (
						<div className="banner-contents">
							<p className="sub-text">React &amp; Node</p>
							<p className="main-text">My BLOG</p>
							<p className="description">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis nostrum dolor provident beatae deserunt magnam, illo neque. Maiores ipsum commodi dolorum beatae aliquid laboriosam
								est,
							</p>
						</div>
					)
				)}
			</div>
		</div>
	);
}
