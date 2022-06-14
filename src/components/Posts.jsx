import React from "react";
import styled from "styled-components";
import Post from "./Post";

export default function Posts({ posts }) {
	return (
		<>
			<h2 className="a11y-hidden">Post</h2>
			<Ul>
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
			</Ul>
		</>
	);
}

const Ul = styled.ul`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 2.4rem;

	@media (max-width: 768px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (max-width: 540px) {
		grid-template-columns: repeat(1, 1fr);
	}
`;
