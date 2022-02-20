import Button from "./Button.jsx";

export default function NewRecord(props) {
	return (
		<div className="New-Record">
			<input className="New-Record-Name"></input>
			<textarea className="New-Record-Text">
			</textarea>
			<Button
				caption='Add'
				click={() => {

				}}
			/>
		</div>
	);
}