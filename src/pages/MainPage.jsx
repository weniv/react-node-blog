import React from "react";

import useFetch from "../hooks/useFetch";
import Main from "../templates/main/Main";
import Loading from "../components/loading/Loading";

function MainPage() {
	const { data, error, loading } = useFetch("http://localhost:3000/react-node-blog/data.json");

	if (error) {
		console.log(error);
	}

	return (
		<>
			{loading && <Loading />}
			{data && <Main posts={data.posts} users={data.users} blog={data.blog} />}
		</>
	);
}

export default MainPage;
