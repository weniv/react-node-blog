import React from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";
import { createGlobalStyle } from "styled-components";

import { COLORS, RADIUS } from "../constants";

// images
import saveIcon from "../assets/icon-save.svg";
import saveIconWhite from "../assets/icon-save-white.svg";
import backIcon from "../assets/ArrowLeft-blue.svg";
import likeIcon from "../assets/icon-like.svg";
import likeIconWhite from "../assets/icon-like-white.svg";
import modifyIcon from "../assets/icon-modify.svg";
import modifyIconWhite from "../assets/icon-modify-white.svg";
import deleteIcon from "../assets/icon-delete.svg";
import deleteIconWhite from "../assets/icon-delete-white.svg";

export default function Button({ type, href, children, color, fullWidth, onClick }) {
	return (
		<>
			<GlobalStyle />
			{href ? (
				<Link to={href} className={classnames("button", color, fullWidth)}>
					{children}
				</Link>
			) : (
				<button type={type} onClick={onClick} className={classnames("button", color, fullWidth)}>
					{children}
				</button>
			)}
		</>
	);
}

Button.defaultProps = {
	type: "button",
};

const GlobalStyle = createGlobalStyle`

.button {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	gap: 0.8rem;

	height: 4rem;
	padding: 0.2rem 1.2em 0;
	border: 0;
	border-radius: ${RADIUS.border};
	background: ${COLORS.main};
	color: ${COLORS.white};
	text-transform: uppercase;
	font-weight: bold;
	line-height: 1;
	
	img {
		height: 1.2em;
		margin-top: -0.2rem;
		vertical-align: middle;
	}
	&.fullWidth{
		width: 100%;
	}

	&.gray {
		background: ${COLORS.grayBackground};
		color: ${COLORS.black};
	}
	&.white {
		padding: 0.2rem 0.8em 0;
		background: ${COLORS.white};
		color: ${COLORS.black};
		img {
		height: 1.4em;
	}
	}		
}

.btn-delete:focus {
	outline-color: rgba(${COLORS.redRgb}, 0.2);
	box-shadow: 0 0 0 1px ${COLORS.red};
}

/* 저장 버튼 */
.btn-save {
	width: 9.6rem;
	height: 4rem;
	padding-left: 2.4rem;
	border: 1px solid rgba(${COLORS.mainRgb}, 0.5);
	border-radius: ${RADIUS.border};
	background: ${COLORS.white} url(${saveIcon}) no-repeat 2rem 50% / 1.6rem;
	transition: all 0.3s;
}
.btn-save:hover {
	background: ${COLORS.main} url(${saveIconWhite}) no-repeat 2rem 50% / 1.6rem;
	color: ${COLORS.white};
}

/* 뒤로가기 */
.btn-back {
	width: 6.4rem;
	height: 6.4rem;
	border-radius: 0 ${RADIUS.border} ${RADIUS.border} 0;
	background: ${COLORS.grayBackground} url(${backIcon}) no-repeat 50% 50% / 4rem;
	font-size: 1.6rem;
}

.btn-like {
	width: 12rem;
	height: 4rem;
	padding-left: 3rem;
	border: 1px solid rgba(${COLORS.redRgb}, 0.5);
	border-radius: ${RADIUS.border};
	background: ${COLORS.white} url(${likeIcon}) no-repeat 2.5rem 50% / 2.4rem;
	transition: all 0.3s;
}
.btn-like:hover,
.btn-like.active {
	background: ${COLORS.red} url(${likeIconWhite}) no-repeat 2.5rem 50% / 2.4rem;
	color: ${COLORS.white};
}
.btn-like:focus {
	outline-color: rgba(${COLORS.redRgb}, 0.2);
	box-shadow: none;
}

.btn-modify,
.btn-delete {
	width: 4rem;
	height: 4rem;
	border: 0;
	border-radius: ${RADIUS.border};
	transition: all 0.3s;
}
.btn-modify {
	background: ${COLORS.grayBackground} url(${modifyIcon}) no-repeat 50% 50% / 1.6rem;
	right: 13rem;
}
.btn-modify:hover {
	background: ${COLORS.main} url(${modifyIconWhite}) no-repeat 50% 50% / 1.6rem;
}

.btn-delete {
	background: ${COLORS.grayBackground} url(${deleteIcon}) no-repeat 50% 50% / 1.6rem;
}

.btn-delete:hover {
	background: ${COLORS.red} url(${deleteIconWhite}) no-repeat 50% 50% / 1.6rem;
}

`;
