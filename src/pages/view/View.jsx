import React from "react";
import WrapBox from "../../components/layouts/wrap/WrapBox";
import Author from "../../components/author/Author";
import Category from "../../components/category/Category";

import "./view.css";
import img2 from "../../images/img2.jpg";
import { Link } from "react-router-dom";

export default function View({ profileImg }) {
	return (
		<div className="view">
			<div className="max-width">
				<WrapBox>
					<Author profileImg={profileImg} userName="Chilli" created="2022.04.28" />
					<Category list={["Life", "Style"]} />
					<div className="title-wrap">
						<h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
						<button className="btn-like">Like</button>
					</div>

					<hr />
					<div className="view-contents">
						<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore illum nostrum perferendis voluptas, voluptate soluta corrupti dolore quidem. Placeat, eaque! Exercitationem est
							facilis dolor quas odio cum incidunt repudiandae vel. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore illum nostrum perferendis voluptas, voluptate soluta corrupti
							dolore quidem. Placeat, eaque! Exercitationem est facilis dolor quas odio cum incidunt repudiandae vel. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore illum nostrum
							perferendis voluptas, voluptate soluta corrupti dolore quidem. Placeat, eaque! Exercitationem est facilis dolor quas odio cum incidunt repudiandae vel. Lorem ipsum dolor sit amet
							consectetur, adipisicing elit. Inventore illum nostrum perferendis voluptas, voluptate soluta corrupti dolore quidem. Placeat, eaque! Exercitationem est facilis dolor quas odio cum
							incidunt repudiandae vel.
						</p>
						<img src={img2} alt="" />
						<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore illum nostrum perferendis voluptas, voluptate soluta corrupti dolore quidem. Placeat, eaque! Exercitationem est
							facilis dolor quas odio cum incidunt repudiandae vel. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore illum nostrum perferendis voluptas, voluptate soluta corrupti
							dolore quidem. Placeat, eaque! Exercitationem est facilis dolor quas odio cum incidunt repudiandae vel. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore illum nostrum
							perferendis voluptas, voluptate soluta corrupti dolore quidem. Placeat, eaque! Exercitationem est facilis dolor quas odio cum incidunt repudiandae vel. Lorem ipsum dolor sit amet
							consectetur, adipisicing elit. Inventore illum nostrum perferendis voluptas, voluptate soluta corrupti dolore quidem. Placeat, eaque! Exercitationem est facilis dolor quas odio cum
							incidunt repudiandae vel.
						</p>
					</div>
					<div className="btn-group">
						<Link to="#" className="btn-modify">
							<span className="a11y-hidden">modify</span>
						</Link>
						<button type="button" className="btn-delete">
							<span className="a11y-hidden">delete</span>
						</button>
					</div>
					<Link to="/" className="btn-back">
						<span className="a11y-hidden">Back</span>
					</Link>
				</WrapBox>
			</div>
		</div>
	);
}
