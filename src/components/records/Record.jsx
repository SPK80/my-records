// import { useState } from "react";
import Button from "./Button.jsx";

export default function Record({ name, value, onSelectionChanged, editClick, delClick }) {
	// const [id, setID] = useState(name);

	return (
		<div className="Record">

			<input
				type='checkbox'
				onChange={(e) => onSelectionChanged(name, e.target.checked)}
			></input>

			<span className="RecordName">{name}</span>

			<pre className="RecordValue">{value}</pre>

			<Button
				caption='Del'
				click={() => { delClick(name) }}
			/>

			<Button
				caption='Edit'
				click={() => { editClick(name) }}
			/>

		</div >
	)
}