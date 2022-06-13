import React from "react";
import { Navigate } from "react-router-dom";

import Register from "../components/templates/register/Register";

export default function RegisterPage({ isLogined }) {
	return <>{isLogined ? <Navigate to="/"></Navigate> : <Register />}</>;
}
