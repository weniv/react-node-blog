import React from "react";
import styled from "styled-components";

import { COLORS } from "../constants";

export default function Author({ profileImg, userName, created }) {
	return (
		<Dl className="author-wrap">
			<dt className="a11y-hidden">Author</dt>
			<dd className="author">
				<img src={process.env.PUBLIC_URL + profileImg} alt="" /> {userName}
			</dd>
			<dt className="a11y-hidden">Created</dt>
			<dd className="created">{created}</dd>
		</Dl>
	);
}

const Dl = styled.dl`
	display: flex;
	gap: 1rem;
	color: #767676;
	font-size: 1.2rem;

	dd {
		display: flex;
		align-items: center;
		gap: 0.6rem;
	}

	.author img {
		width: 2em;
		height: 2em;
		border-radius: 50%;
	}

	.created::before {
		content: "";
		display: block;
		width: 1px;
		height: 0.8em;
		margin-right: 1rem;
		background: ${COLORS.border};
	}
`;
