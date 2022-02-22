export default function Record({ name, value }) {
	return (
		<span>
			<span className="RecordName">{name}</span>
			<span className="RecordValue">{value}</span>
		</span>
	)
}