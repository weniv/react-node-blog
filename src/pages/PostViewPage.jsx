import React from "react";
import Loading from "../components/Loading";

import View from "../components/templates/View";
import useFetch from "../hooks/useFetch";

export function PostViewPage() {
	const { data, error, loading } = useFetch(process.env.PUBLIC_URL + "/data.json");

	if (loading) {
		return <Loading />;
	} else if (error) {
		console.log(error);
	} else {
		return data && <View posts={data.posts} />;
	}
}
