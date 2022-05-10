import React from "react";

import "./category.css";

export default function Category({ list }) {
	return (
		<dl className="category">
			<dt className="a11y-hidden">Category</dt>
			{list.map((item) => (
				<dd key={item}>{item}</dd>
			))}
		</dl>
	);
}
