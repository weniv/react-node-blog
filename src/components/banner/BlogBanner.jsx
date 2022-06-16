import React from "react";
import styled from "styled-components";

import BannerWrap from "./BannerWrap";

export default function BlogBanner({ blog }) {
	return (
		<BannerWrap>
			<SubText className="sub-text">{blog.subTitle}</SubText>
			<MainText className="main-text">{blog.mainTitle}</MainText>
			<Description className="description">{blog.description}</Description>
		</BannerWrap>
	);
}

const SubText = styled.p`
	border: 1px solid rgba(249, 249, 249, 0.3);
	border-width: 1px 0;
	padding: 1rem 0 0.8rem;
	font-size: 2rem;
	letter-spacing: 0.2em;
`;
const MainText = styled.p`
	font-weight: bold;
	font-size: 5.4rem;
	margin: 1.6rem 0;
`;

const Description = styled.p`
	font-size: 1.2rem;
	text-align: left;
	word-break: break-all;
	padding: 0 0.8rem;
`;
