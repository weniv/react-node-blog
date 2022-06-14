import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { COLORS, RADIUS } from "../../constants";

// icon
import facebook from "../../assets/Facebook.svg";
import twitter from "../../assets/Twitter.svg";
import instagram from "../../assets/Instagram.svg";
import github from "../../assets/Github.svg";

export function About({ users }) {
	const user = users.find((user) => user.email === "chilli@blog.com");

	const categoriesList = user.category.map((category, index) => (
		<li key={`category${index}`}>
			<Link to={`#${category}`}>{category}</Link>
		</li>
	));

	return (
		<Aside>
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
		</Aside>
	);
}

const Aside = styled.aside`
	flex-basis: calc((100% - 2.4rem * 3) / 4);
	flex-shrink: 0;
	align-self: flex-start;
	padding: 4rem 2.4rem 7rem;
	box-sizing: border-box;
	border-radius: ${RADIUS.border};
	background: ${COLORS.white};
	text-align: center;
	font-size: 2rem;

	@media (max-width: 1024px) {
		width: 100%;
	}

	h2,
	h3 {
		margin-bottom: 2rem;
		font-size: 1.2rem;
		font-weight: bold;
		text-transform: uppercase;
		text-decoration: underline;
		letter-spacing: 0.1em;
	}
	h3 {
		margin-top: 6rem;
	}

	.user-profile {
		width: 8rem;
		height: 8rem;
		object-fit: cover;
		border-radius: 50%;
	}

	.user-name {
		color: ${COLORS.main};
		font-weight: bold;
		font-size: 1.6rem;
		margin: 1.2rem 0 0.8rem;
	}
	.user-description {
		font-size: 1.4rem;
		padding: 0 0.4rem;
	}

	.categories {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
		gap: 0.8rem;

		li a {
			background: ${COLORS.grayBackground};
			color: ${COLORS.grayText};
			font-size: 1.2rem;
			border-radius: calc(${RADIUS.border} * 2);
			padding: 0.2rem 1.2rem;
		}
	}

	.sns {
		display: flex;
		gap: 0.6rem;
		justify-content: center;
		margin-top: -0.4rem;

		a {
			display: block;
			padding: 0.4rem;
			line-height: 1;
		}

		img {
			width: 1.6rem;
			display: block;
		}
	}
`;
