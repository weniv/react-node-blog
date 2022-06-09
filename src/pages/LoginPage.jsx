import React from "react";
import { Navigate } from "react-router-dom";

import Login from "../templates/login/Login";

export default function LoginPage({ isLogined, loginHandler }) {
	return <>{isLogined ? <Navigate to="/"></Navigate> : <Login loginHandler={loginHandler} />}</>;
}
