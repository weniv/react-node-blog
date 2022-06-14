import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { COLORS } from "../../constants";

import WriteBanner from "../banner/WriteBanner";
import WrapBox from "../WrapBox";

export default function Write() {
	return (
		<>
			<WriteBanner />
			<Div className="write">
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
			</Div>
		</>
	);
}

const Div = styled.div`
	.title-input {
		background: none;
		border: none;
		height: 6.4rem;
		font-size: 3.2rem;
		font-weight: bold;
		width: calc(100% - 18rem);
	}
	.title-input:not(:placeholder-shown) {
		border: none;
	}
	@media (max-width: 1024px) {
		.title-input {
			width: 100%;
			margin-top: 5.2rem;
		}
	}
	textarea {
		width: 100%;
		min-height: 50rem;
		border: 0;
		font-family: inherit;
		border-radius: 0.8rem;
		padding: 2rem 2rem;
	}
	textarea::placeholder {
		font-size: 1.6rem;
		color: ${COLORS.gray};
	}
`;
