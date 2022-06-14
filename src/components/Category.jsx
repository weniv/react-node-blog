import React from "react";
import styled from "styled-components";

import { COLORS, RADIUS } from "../constants";

export default function Category({ list }) {
	return (
		<Dl className="category">
			<dt className="a11y-hidden">Category</dt>
			{list.map((item) => (
				<dd key={item}>{item}</dd>
			))}
		</Dl>
	);
}

const Dl = styled.dl`
	display: flex;
	flex-wrap: wrap;
	color: ${COLORS.main};

	dd {
		margin-right: 0.4rem;
		padding: 0.2rem 1.2rem;
		border-radius: calc(${RADIUS.border} * 2);
		background: ${COLORS.grayBackground};
		font-size: 1.2rem;
	}
`;
