import React, { useState } from "react";

import "./input.css";

export default function Input({ label, type, placeholder, id, value }) {
	const [newValue, setNewValue] = useState(value);
	return (
		<>
			<label htmlFor={id}>{label}</label>
			<input type={type} id={id} placeholder={placeholder} value={newValue} onChange={(e) => setNewValue(e.target.value)} />
		</>
	);
}
