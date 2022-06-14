import React from "react";
import { Navigate } from "react-router-dom";
import Write from "../components/templates/Write";

export function PostWritePage({ isLogined }) {
	return <>{isLogined ? <Write /> : <Navigate to="/login"></Navigate>}</>;
}
