import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

import WrapBox from "../WrapBox";
import PostBanner from "../banner/PostBanner";
import Author from "../Author";
import Category from "../Category";

export default function View({ posts }) {
	const location = useLocation().pathname.slice(1);
	const post = posts.find((post) => post.id + "" === location.split("view/")[1]);

	return (
		<>
			<PostBanner post={post} />

			<Div className="view">
				<div className="max-width">
					<WrapBox>
						<Author profileImg={post.profileImg} userName={post.userName} created={post.created} />
						<Category list={post.category} />
						<div className="title-wrap">
							<h2>{post.title}</h2>
							<button className="btn-like">Like</button>
						</div>
						<hr />
						<div className="view-contents">
							{post.contents.map((content, index) =>
								content.type === "p" ? <p key={"content" + index}>{content.text}</p> : <img key={"img" + index} src={process.env.PUBLIC_URL + content.src} alt="" />
							)}
						</div>
						<div className="btn-group">
							<Link to="#" className="btn-modify">
								<span className="a11y-hidden">modify</span>
							</Link>
							<button type="button" className="btn-delete">
								<span className="a11y-hidden">delete</span>
							</button>
						</div>
						<Link to="/" className="btn-back">
							<span className="a11y-hidden">Back</span>
						</Link>
					</WrapBox>
				</div>
			</Div>
		</>
	);
}

const Div = styled.div`
	.wrap-box {
		h2 {
			margin-bottom: 0;
		}
		.author-wrap {
			height: 6.4rem;
			font-size: 1.4rem;
		}
		.btn-back {
			position: absolute;
			top: 8rem;
			left: 0;
		}
	}
	/* contents */
	.view-contents {
		img {
			max-width: 100%;
			margin: 3.2rem 0;
		}
		p {
			font-size: 1.6rem;
			line-height: 1.6;
			text-align: justify;
			letter-spacing: -0.01em;
		}
	}

	/* title */
	.title-wrap {
		display: flex;
		align-items: flex-end;
		justify-content: space-between;
		gap: 8rem;
		margin-bottom: 1rem;
		font-size: 1.6rem;

		h2 {
			width: 100%;
			text-transform: none;
			font-size: 3.2rem;
			font-weight: bold;
		}

		button {
			flex-shrink: 0;
		}

		@media (max-width: 1024px) {
			flex-direction: column;
			gap: 2rem;
		}
	}

	.category {
		margin: 2rem 0 1rem 0;
	}

	@media (max-width: 1024px) {
		.wrap-box .btn-back {
			top: 6rem;
			width: 5.2rem;
			height: 5.2rem;
		}
		.wrap-box .author-wrap {
			height: 5.2rem;
			margin-bottom: 1rem;
		}
	}

	@media (max-width: 640px) {
		.wrap-box .btn-back {
			top: 4rem;
		}
		.wrap-box .author-wrap {
			margin-bottom: 1rem;
			padding-left: 3rem;
		}
	}
`;
