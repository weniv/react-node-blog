import React from "react";
import { Navigate } from "react-router-dom";
import Write from "../components/templates/write/Write";

export default function PostWritePage({ isLogined }) {
	return <>{isLogined ? <Write /> : <Navigate to="/login"></Navigate>}</>;
}
