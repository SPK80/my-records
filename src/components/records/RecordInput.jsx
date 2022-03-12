import Button from "./Button.jsx";

export default function RecordInput({ record, onNameChanged, onTextChanged, onPostClick, onCanselClick }) {
	return (
		<div className="New-Record">

			<input className="New-Record-Name"
				onChange={event => onNameChanged(event.target.value)}
				value={record.id}
			>
			</input>

			<textarea className="New-Record-Text"
				onChange={event => onTextChanged(event.target.value)}
				value={record.text}
			>
			</textarea>

			<Button
				caption='Post'
				click={onPostClick}
			/>

			<Button
				caption='Cansel'
				click={onCanselClick}
			/>

		</div>
	);
}