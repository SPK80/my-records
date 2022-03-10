import Button from "./Button.jsx";

export default function Record({ name, value, editClick, delClick }) {

	return (
		<div className="Record">
			<span className="RecordName">{name}</span>
			<pre className="RecordValue">{value}</pre>

			<Button
				caption='Del'
				click={() => { delClick(name) }}
			/>

			<Button
				caption='Edit'
				click={() => { editClick(name, value) }}
			/>

		</div >
	)
}