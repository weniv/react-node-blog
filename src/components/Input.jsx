import React, { useState } from "react";
import { createGlobalStyle } from "styled-components";

import { COLORS, RADIUS } from "../constants";

export default function Input({ label, type, placeholder, id, value, required, minLength, readOnly }) {
	const [newValue, setNewValue] = useState(value);
	return (
		<>
			<GlobalStyle />
			<label htmlFor={id}>{label}</label>
			<input type={type} id={id} placeholder={placeholder} value={newValue} onChange={(e) => setNewValue(e.target.value)} required={required} minLength={minLength} readOnly={readOnly} />
		</>
	);
}

Input.defaultProps = {
	type: "text",
};

const GlobalStyle = createGlobalStyle`
label {
	display: block;
	margin-bottom: 0.4rem;
	font-size: 1.4rem;
	font-weight: bold;
}

/* default */
input[type="text"],
input[type="password"],
input[type="email"] {
	width: 100%;
	height: 4rem;
	border: 1px solid ${COLORS.grayBackground};
	border-radius: ${RADIUS.border};
	background: ${COLORS.grayBackground};
	text-indent: 1rem;
}

/* focus */
input[type="text"]:focus,
input[type="password"]:focus,
input[type="email"]:focus {
	background: ${COLORS.white};
}

/* placeholder */
input[type="text"]::placeholder,
input[type="password"]::placeholder,
input[type="email"]::placeholder {
	color: ${COLORS.grayText};
}

/* filled */
input[type="text"]:not(:placeholder-shown),
input[type="password"]:not(:placeholder-shown),
input[type="email"]:not(:placeholder-shown) {
	border: 1px solid ${COLORS.border};
	background: ${COLORS.white};
}
`;
