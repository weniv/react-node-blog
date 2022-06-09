import React from "react";
import { Navigate } from "react-router-dom";

import useFetch from "../hooks/useFetch";
import Loading from "../components/loading/Loading";
import Mypage from "../templates/mypage/Mypage";

export default function MyProfilePage({ isLogined }) {
	const { data, error, loading } = useFetch("http://localhost:3000/react-node-blog/data.json");

	if (error) {
		console.log(error);
	}

	return (
		<>
			{isLogined ? (
				<>
					{loading && <Loading />}
					{data && <Mypage user={data.users.find((user) => user.name === localStorage.getItem("login"))} blog={data.blog} />}
				</>
			) : (
				<Navigate to="/login"></Navigate>
			)}
		</>
	);
}
