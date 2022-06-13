import React from "react";

import View from "../components/templates/view/View";
import useFetch from "../hooks/useFetch";
import Loading from "../components/loading/Loading";

export default function PostViewPage({ isLogined }) {
	const { data, error, loading } = useFetch("http://localhost:3000/react-node-blog/data.json");

	if (error) {
		console.log(error);
	}

	return (
		<>
			{loading && <Loading />}
			{data && <View posts={data.posts} />}
		</>
	);
}
