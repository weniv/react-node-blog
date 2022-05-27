import React from "react";
import Post from "../post/Post";

import "./posts.css";

export default function Posts({ posts }) {
	return (
		<>
			<h2 className="a11y-hidden">Post</h2>
			<ul className="posts">
				{posts
					.slice(0)
					.reverse()
					.map((post) => (
						<li key={post.id}>
							<Post id={post.id} img={post.thumbnail} title={post.title} profileImg={post.profileImg} userName={post.userName} created={post.created} category={post.category}>
								{post.contents.find((content) => content.type === "p").text}
							</Post>
						</li>
					))}
			</ul>
		</>
	);
}
