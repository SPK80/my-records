export default function RecordInput({ record, onNameChanged, onTextChanged }) {
	return (
		<div className="New-Record">
			<input className="New-Record-Name"
				onChange={event => onNameChanged(event.target.value)}
				value={record.name}
			>
			</input>
			<textarea className="New-Record-Text"
				onChange={event => onTextChanged(event.target.value)}
				value={record.text}
			>
			</textarea>
		</div>
	);
}