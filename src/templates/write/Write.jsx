import React from "react";
import { Link, Navigate } from "react-router-dom";
import Banner from "../../components/banner/Banner";
import WrapBox from "../../components/layouts/wrap/WrapBox";

import "./write.css";

export default function Write({ isLogined }) {
	return (
		<>
			{!isLogined ? (
				<Navigate to="/"></Navigate>
			) : (
				<>
					<Banner type="write" />
					<div className="write">
						<div className="max-width">
							<WrapBox>
								<section className="view-wrap">
									<h2 className="a11y-hidden">Write</h2>
									<form>
										<label htmlFor="post-title" className="a11y-hidden">
											Title
										</label>
										<input type="text" id="post-title" placeholder="Title" className="title-input" maxLength={50} />

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
				</>
			)}
		</>
	);
}
