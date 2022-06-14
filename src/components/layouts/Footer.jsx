import React from "react";
import styled from "styled-components";

import { COLORS, RADIUS } from "../../constants";
import ArrowTop from "../../assets/ArrowTop.svg";

export function Footer() {
	function handleScrollTop() {
		window.scrollTo({ top: 0, behavior: "smooth" });
	}
	return (
		<FooterWrap>
			<div className="max-width">
				<h2>©Weniv Corp.</h2>
				<button className="top-button" onClick={handleScrollTop}>
					TOP
				</button>
			</div>
		</FooterWrap>
	);
}

const FooterWrap = styled.footer`
	background: ${COLORS.white};
	margin-top: 10rem;

	.max-width {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 8rem;
		position: relative;
	}

	h2 {
		color: ${COLORS.gray};
	}

	.top-button {
		position: absolute;
		bottom: 0;
		right: 0;
		width: 6.4rem;
		height: 6.4rem;
		padding-top: 2.2rem;
		border: 0;
		border-radius: ${RADIUS.border} ${RADIUS.border} 0 0;
		background: ${COLORS.main} url(${ArrowTop}) no-repeat 50% 0.4rem / 4rem;
		color: ${COLORS.white};
		text-align: center;
		font-weight: bold;
	}
`;
