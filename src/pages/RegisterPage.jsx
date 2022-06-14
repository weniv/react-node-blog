import React from "react";
import { Navigate } from "react-router-dom";

import Register from "../components/templates/Register";

export function RegisterPage({ isLogined }) {
	return <>{isLogined ? <Navigate to="/"></Navigate> : <Register />}</>;
}
