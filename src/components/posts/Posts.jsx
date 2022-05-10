import React from "react";
import Post from "../post/Post";

import "./posts.css";

import img1 from "../../images/post-img1.jpg";
import img2 from "../../images/post-img2.jpg";
import img3 from "../../images/post-img3.jpg";
import img4 from "../../images/post-img4.jpg";
import img5 from "../../images/post-img5.jpg";
import img6 from "../../images/post-img6.jpg";

export default function Posts({ profileImg }) {
	return (
		<>
			<h2 className="a11y-hidden">Post</h2>
			<ul className="posts">
				<li>
					<Post
						img={img1}
						title="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse deserunt ducimus earum provident iste eaque dolores consequuntur? Dolor, voluptatem minima nobis ullam voluptate fugiat, id
					placeat optio magni laborum iste!"
						profileImg={profileImg}
						userName="Chilli"
						created="2022.04.01"
					>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse deserunt ducimus earum provident iste eaque dolores consequuntur? Dolor, voluptatem minima nobis ullam voluptate fugiat, id
						placeat optio magni laborum iste!
					</Post>
				</li>
				<li>
					<Post img={img2} title="Lorem, ipsum dolor sit amet consectetur" profileImg={profileImg} userName="Chilli" created="2022.04.01">
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse deserunt ducimus earum provident iste eaque dolores consequuntur? Dolor, voluptatem minima nobis ullam voluptate fugiat, id
						placeat optio magni laborum iste!
					</Post>
				</li>
				<li>
					<Post img={img3} title="Lorem, ipsum dolor sit amet consectetur adipisicing elit." profileImg={profileImg} userName="Chilli" created="2022.04.01">
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse deserunt ducimus earum provident iste eaque dolores consequuntur? Dolor, voluptatem minima nobis ullam voluptate fugiat, id
						placeat optio magni laborum iste!
					</Post>
				</li>
				<li>
					<Post img={img4} title="Lorem, ipsum dolor sit amet consectetur adipisicing elit." profileImg={profileImg} userName="Chilli" created="2022.04.01">
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse deserunt ducimus earum provident iste eaque dolores consequuntur? Dolor, voluptatem minima nobis ullam voluptate fugiat, id
						placeat optio magni laborum iste!
					</Post>
				</li>
				<li>
					<Post img={img5} title="Lorem" profileImg={profileImg} userName="Chilli" created="2022.04.01">
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse deserunt ducimus earum provident iste eaque dolores consequuntur? Dolor, voluptatem minima nobis ullam voluptate fugiat, id
						placeat optio magni laborum iste!
					</Post>
				</li>
				<li>
					<Post img={img6} title="Lorem" profileImg={profileImg} userName="Chilli" created="2022.04.01">
						Lorem.
					</Post>
				</li>
			</ul>
		</>
	);
}
