import React from "react";
import { Navigate } from "react-router-dom";
import Login from "../components/templates/Login";

export function LoginPage({ isLogined, loginHandler }) {
	return <>{isLogined ? <Navigate to="/"></Navigate> : <Login loginHandler={loginHandler} />}</>;
}
