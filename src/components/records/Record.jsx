export default function Record({ name, value, onSelectionChanged, onEdit }) {
	return (
		<div className="Record"		>
			<input
				id={name}
				type='checkbox'
				onChange={(e) => {
					onSelectionChanged(e.target.id, e.target.checked)
				}}
			></input>
			<span className="RecordName">{name}</span>
			<pre
				id={name}
				className="RecordValue"
				onDoubleClick={(e) => {
					onEdit(e.target.id, e.target.innerText)
					// console.log(e.target.innerText);
				}}
			>{value}</pre>
		</div >
	)
}