import React from "react";
import styled, { createGlobalStyle } from "styled-components";

import { COLORS } from "../../constants";
import bannerImg from "../../assets/background.jpg";

export default function BannerWrap({ children, mainBg }) {
	return (
		<>
			<GlobalStyle />
			<Div className="banner" mainBg={mainBg}>
				<div className="max-width">
					<div className="banner-contents">{children}</div>
				</div>
			</Div>
		</>
	);
}

const GlobalStyle = createGlobalStyle`
.banner-contents {
	width: 28rem;
	padding: 7rem 0 14.5rem;
	text-align: center;
	color: ${COLORS.grayBackgroundLight};

	&::before {
		content: "";
		display: block;
		position: absolute;
		top: 0;
		left: 0;
		width: calc((100% - 1224px) / 2 + 44rem);
		height: 100%;
		background: rgba(40, 48, 63, 0.5);
	}

	& > * {
		position: relative;
	}
	
	@media (max-width: 1280px) {
		&::before {
			width: 44rem;
		}
	}

	@media (max-width: 768px) {
		width: 100%;
		margin: 0 auto;

		&::before {
			width: 100%;
		}
	}

}
.today {
		padding-left: 0.8em;
		font-size: 5rem;
		font-weight: bold;
		text-align: left;
		line-height: 1.1;
		color: #fff;

		em {
			display: block;
			font-size: 2em;
			margin-bottom: -0.15em;
		}

		@media (max-width: 1260px) {
			font-size: 3rem;
			padding-left: 0.2em;

			em {
				display: inline;
				font-size: 1.4em;
			}
		}
		@media (max-width: 768px) {
			text-align: center;
			padding-left: 0;
		}
	}
`;

const Div = styled.div`
	position: relative;
	background: url(${(props) => (props.mainBg ? process.env.PUBLIC_URL + props.mainBg : bannerImg)}) no-repeat 50% 50% / cover;
	height: 27em;
	margin-bottom: -7em;
`;
