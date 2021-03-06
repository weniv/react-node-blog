import React from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";

import "./button.css";

export default function Button({ type, href, children, color, fullWidth }) {
	return href ? (
		<Link to={href} className={classnames("button", fullWidth, color)}>
			{children}
		</Link>
	) : (
		<button type={type} className={classnames("button", fullWidth, color)}>
			{children}
		</button>
	);
}
Button.defaultProps = {
	type: "button",
};
