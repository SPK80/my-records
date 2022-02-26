export default function Record({ name, value }) {
	return (
		<div className="Record" >
			<span className="RecordName">{name}</span>
			<span className="RecordValue">{value}</span>
		</div>
	)
}