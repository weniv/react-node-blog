import React from "react";

import Button from "../button/Button";

export default function NotFound() {
	return (
		<>
			<section className="max-width not-found">
				<h2>OOPS! : (</h2>
				<p> We can't find the page</p>
				<Button href="/">HOME</Button>
			</section>
		</>
	);
}
