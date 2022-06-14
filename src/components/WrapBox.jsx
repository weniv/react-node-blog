import React from "react";
import styled from "styled-components";

import { COLORS, RADIUS } from "../constants";

export default function WrapBox({ children }) {
	return (
		<Section className="wrap-box">
			<div className="inner">{children}</div>
		</Section>
	);
}

const Section = styled.section`
	position: relative;
	width: 60rem;
	max-width: calc(100% - 4rem);
	margin: -22rem auto 0;
	padding: 8rem 0;
	border-radius: ${RADIUS.border};
	background: ${COLORS.white};
	font-size: 4rem;
	transition: all 0.3s;

	.inner {
		width: 39.2rem;
		max-width: calc(100% - 8rem);
		margin: 0 auto;
		font-size: 1.6rem;
	}

	h2 {
		margin-bottom: 4.8rem;
		font-size: 3.2rem;
		font-weight: bold;
		text-transform: uppercase;
	}

	ul {
		margin-bottom: 2.4rem;
		li:not(:first-child) {
			margin-top: 4rem;
		}
	}

	hr {
		border: 1px solid ${COLORS.border};
		border-width: 1px 0 0 0;
		margin: 3.2rem 0;
	}

	/* view, write */
	.mypage &,
	.view &,
	.write & {
		width: 91.2rem;
		max-width: 100%;
		margin: -30rem 0 auto auto;
		padding: 8rem;
	}

	.view & .inner,
	.write & .inner {
		width: 100%;
		max-width: 100%;
	}

	.btn-group {
		display: flex;
		align-items: center;
		gap: 0.8rem;
		position: absolute;
		top: 9.2rem;
		right: 8rem;
		font-size: 1.6rem;
	}

	@media (max-width: 1024px) {
		margin-top: -35rem;

		.mypage &,
		.view &,
		.write & {
			padding: 6rem;
		}

		.view &,
		.write & {
			width: 100%;
		}
		.btn-group {
			top: 6rem;
			right: 6rem;
			height: 5.2rem;
		}
	}

	@media (max-width: 640px) {
		.mypage &,
		.view &,
		.write & {
			padding: 4rem;
		}

		.btn-group {
			top: 4rem;
			right: 4rem;
		}
	}
`;
