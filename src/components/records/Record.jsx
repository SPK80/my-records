export default function Record({ name, value, onSelectionChanged }) {
	return (
		<div className="Record" >
			<input
				id={name}
				type='checkbox'
				onChange={(e) => {
					onSelectionChanged(e.target.id, e.target.checked)
				}}
			></input>
			<span className="RecordName">{name}</span>
			<pre className="RecordValue">{value}</pre>
		</div >
	)
}