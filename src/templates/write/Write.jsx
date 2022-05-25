import React from "react";
import { Link } from "react-router-dom";
import WrapBox from "../../components/layouts/wrap/WrapBox";

import "./write.css";

export default function Write() {
	return (
		<div className="write">
			<div className="max-width">
				<WrapBox>
					<section className="view-wrap">
						<h2 className="a11y-hidden">Write</h2>
						<form>
							<label htmlFor="post-title" className="a11y-hidden">
								Title
							</label>
							<input type="text" id="post-title" placeholder="Title" className="title-input" />

							<hr />

							<label htmlFor="textarea" className="a11y-hidden">
								contents
							</label>
							<textarea placeholder="Tell your story..." id="textarea"></textarea>

							<div className="btn-group">
								<button type="button" className="btn-delete">
									<span className="a11y-hidden">Delete</span>
								</button>
								<button to="#" className="btn-save">
									Save
								</button>
							</div>
							<Link to="/" className="btn-back">
								<span className="a11y-hidden">Back</span>
							</Link>
						</form>
					</section>
				</WrapBox>
			</div>
		</div>
	);
}
