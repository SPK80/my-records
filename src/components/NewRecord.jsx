import Button from "./Button.jsx";

export default function NewRecord({ onNameChanged, onTextChanged, onAddClick }) {
	return (
		<div className="New-Record">
			<input className="New-Record-Name"
				onChange={event => onNameChanged(event.target.value)}
			></input>
			<textarea className="New-Record-Text"
				onChange={event => onTextChanged(event.target.value)}
			>
			</textarea>
			<Button
				caption='Add'
				click={onAddClick}
			/>
		</div>
	);
}