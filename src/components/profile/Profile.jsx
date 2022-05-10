import React from "react";

import "./profile.css";

import noImg from "../../images/noimg.svg";

export default function Profile({ profileImg }) {
	return (
		<div className="profile-wrap">
			{profileImg ? <img src={profileImg} alt="프로필" /> : <img src={noImg} alt="프로필 이미지 없음" />}

			<div className="btn-profile">
				<label htmlFor="profile">
					<span className="a11y-hidden">프로필 이미지 등록하기</span>
				</label>
				<input type="file" id="profile" />
			</div>
		</div>
	);
}
