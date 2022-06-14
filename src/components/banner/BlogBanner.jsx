import React from "react";
import styled from "styled-components";

import BannerWrap from "./BannerWrap";

export default function BlogBanner({ blog }) {
	return (
		<BannerWrap>
			<Div className="banner-contents">
				<p className="sub-text">{blog.subTitle}</p>
				<p className="main-text">{blog.mainTitle}</p>
				<p className="description">{blog.description}</p>
			</Div>
		</BannerWrap>
	);
}

const Div = styled.div`
	.sub-text {
		border: 1px solid rgba(249, 249, 249, 0.3);
		border-width: 1px 0;
		padding: 1rem 0 0.8rem;
		font-size: 2rem;
		letter-spacing: 0.2em;
	}
	.main-text {
		font-weight: bold;
		font-size: 5.4rem;
		margin: 1.6rem 0;
	}

	.description {
		font-size: 1.2rem;
		text-align: left;
		word-break: break-all;
		padding: 0 0.8rem;
	}
`;
