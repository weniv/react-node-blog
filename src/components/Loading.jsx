import React from "react";
import styled from "styled-components";

import loading from "../assets/loader.svg";

export default function Loading() {
	return <Div>Loading...</Div>;
}

const Div = styled.div`
	text-align: center;
	background: url(${loading}) no-repeat 50% 0% / 10rem;
	padding-top: 9rem;
	font-weight: bold;
	font-size: 1.4rem;
	margin: 10rem auto;
	text-transform: uppercase;
`;
