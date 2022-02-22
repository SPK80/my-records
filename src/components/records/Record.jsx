export default function Record({ name, value }) {
	return (
		<div>
			<span className="RecordName">{name}</span>
			<span className="RecordValue">{value}</span>
		</div>
	)
}