import React from "react";
import "./about.css";

import { Link } from "react-router-dom";

// icon
import facebook from "../../../images/Facebook.svg";
import twitter from "../../../images/Twitter.svg";
import instagram from "../../../images/Instagram.svg";
import github from "../../../images/Github.svg";

export default function About({ profileImg }) {
	return (
		<aside className="about">
			<h2>About Me</h2>
			<img src={profileImg} alt="" className="user-profile" />
			<p className="user-name">Chilli</p>
			<p className="user-description">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
			<h3>Categories</h3>
			<ul className="categories">
				<li>
					<Link to="#">Life</Link>
				</li>
				<li>
					<Link to="#">Style</Link>
				</li>
				<li>
					<Link to="#">Tech</Link>
				</li>
				<li>
					<Link to="#">Music</Link>
				</li>
				<li>
					<Link to="#">Sport</Link>
				</li>
				<li>
					<Link to="#">Photo</Link>
				</li>
				<li>
					<Link to="#">Develop</Link>
				</li>
			</ul>
			<h3>Follow</h3>
			<ul className="sns">
				<li>
					<Link to="#">
						<img src={facebook} alt="Facebook" />
					</Link>
				</li>
				<li>
					<Link to="#">
						<img src={twitter} alt="Twitter" />
					</Link>
				</li>
				<li>
					<Link to="#">
						<img src={instagram} alt="Instagram" />
					</Link>
				</li>
				<li>
					<Link to="#">
						<img src={github} alt="GitHub" />
					</Link>
				</li>
			</ul>
		</aside>
	);
}
