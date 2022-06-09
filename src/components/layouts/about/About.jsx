import React from "react";
import "./about.css";

import { Link } from "react-router-dom";

// icon
import facebook from "../../../assets/Facebook.svg";
import twitter from "../../../assets/Twitter.svg";
import instagram from "../../../assets/Instagram.svg";
import github from "../../../assets/Github.svg";

export default function About({ users }) {
	const user = users.find((user) => user.email === "chilli@blog.com");

	const categoriesList = user.category.map((category, index) => (
		<li key={`category${index}`}>
			<Link to={`#${category}`}>{category}</Link>
		</li>
	));
	return (
		<aside className="about">
			<h2>About Me</h2>
			<img src={process.env.PUBLIC_URL + user.profileImg} alt="" className="user-profile" />
			<p className="user-name">{user.name}</p>
			<p className="user-description">{user.userInfo}</p>
			<h3>Categories</h3>
			<ul className="categories">{categoriesList}</ul>
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
