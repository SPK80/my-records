export default function Record({ name, value, onSelectionChanged }) {
	return (
		<div className="Record" >
			<input
				id={name}
				type='checkbox'
				onChange={(e) => {
					onSelectionChanged(e.target.id, e.target.checked)
					console.log(e.target);
				}}
			></input>
			<span className="RecordName">{name}</span>
			<span className="RecordValue">{value}</span>
		</div >
	)
}