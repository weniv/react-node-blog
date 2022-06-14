import React from "react";
import styled from "styled-components";

import { COLORS } from "../constants";
import noImg from "../assets/noimg.svg";
import imgIcon from "../assets/icon-image.svg";

export default function Profile({ profileImg }) {
	return (
		<Div>
			{profileImg ? <img src={process.env.PUBLIC_URL + profileImg} alt="프로필" /> : <img src={noImg} alt="프로필 이미지 없음" />}

			<div className="btn-profile">
				<label htmlFor="profile">
					<span className="a11y-hidden">프로필 이미지 등록하기</span>
				</label>
				<input type="file" id="profile" />
			</div>
		</Div>
	);
}

const Div = styled.div`
	width: 12rem;
	height: 12rem;
	margin: 0 auto;
	position: relative;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 50%;
	}

	.btn-profile {
		position: absolute;
		bottom: 0;
		right: 0;

		input[type="file"] {
			width: 4rem;
			height: 4rem;
			border-radius: 50%;
		}

		label {
			width: 4rem;
			height: 4rem;
			border-radius: 50%;
			background: ${COLORS.main} url(${imgIcon}) no-repeat 50% 50% / 2.4rem;
			position: absolute;
			cursor: pointer;
		}
	}
`;
