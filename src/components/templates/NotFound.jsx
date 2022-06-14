import React from "react";
import styled from "styled-components";

import Button from "../Button";

export default function NotFound() {
	return (
		<>
			<Section className="max-width">
				<h2>OOPS! : (</h2>
				<p> We can't find the page</p>
				<Button href="/">HOME</Button>
			</Section>
		</>
	);
}

const Section = styled.section`
	text-align: center;
	margin-top: 8rem;

	h2 {
		color: var(--main-color);
		font-size: 5rem;
		font-weight: bold;
	}

	p {
		font-size: 2rem;
		margin-bottom: 2rem;
	}
`;
