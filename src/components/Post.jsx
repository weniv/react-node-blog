import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { COLORS, RADIUS } from "../constants";
import Author from "./Author";
import Category from "./Category";

export default function Post({ id, profileImg, title, children, img, userName, created, category }) {
	return (
		<LinkWrap to={`/view/${id}`}>
			<article>
				<img src={process.env.PUBLIC_URL + img} alt="" />
				<div className="contents-wrap">
					<Category list={category} />
					<h3>{title}</h3>
					<Author userName={userName} created={created} profileImg={profileImg} />
					<p className="post-description">{children}</p>
				</div>
			</article>
		</LinkWrap>
	);
}

const LinkWrap = styled(Link)`
	display: block;
	overflow: hidden;
	border-radius: ${RADIUS.border};
	background: ${COLORS.white};
	font-size: 2rem;

	article > img {
		width: 100%;
	}

	.contents-wrap {
		padding: 1.6rem 2.4rem 2.4rem;

		h3,
		.post-description {
			display: -webkit-box;
			-webkit-box-orient: vertical;
			overflow: hidden;
			text-overflow: ellipsis;
			word-break: break-all;
		}
		h3 {
			height: calc(1.8rem * 1.4 * 2);
			margin: 1rem 0;
			font-size: 1.8rem;
			font-weight: bold;
			-webkit-line-clamp: 2;
			letter-spacing: -0.02em;
		}
		.post-description {
			height: calc(1.4rem * 1.4 * 3);
			margin-top: 1.6rem;
			color: ${COLORS.gray};
			font-size: 1.4rem;
			-webkit-line-clamp: 3;
			text-indent: 0.5em;
		}

		@media (max-width: 540px) {
			h3 {
				height: auto;
				-webkit-line-clamp: 1;
			}
			.post-description {
				height: auto;
				-webkit-line-clamp: 2;
			}
		}
	}
`;
