import React from "react";
import { Navigate } from "react-router-dom";

import Mypage from "../components/templates/Mypage";

export function MyProfilePage({ isLogined, data }) {
	return <>{isLogined ? <Mypage user={data.users.find((user) => user.name === localStorage.getItem("login"))} blog={data.blog} /> : <Navigate to="/login"></Navigate>}</>;
}
