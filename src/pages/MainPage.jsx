import React from "react";

import useFetch from "../hooks/useFetch";
import Main from "../components/templates/Main";
import Loading from "../components/Loading";

export function MainPage() {
	const { data, error, loading } = useFetch(process.env.PUBLIC_URL + "/data.json");
	if (loading) {
		return <Loading />;
	} else if (error) {
		console.log(error);
	} else {
		return data && <Main posts={data.posts} users={data.users} blog={data.blog} />;
	}
}
