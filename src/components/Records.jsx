import Record from "./Record";

export default function Records({ records }) {
	return (
		<div className="Records"> {
			Object.keys(records).reverse().map(key =>
				<Record
					key={key}
					name={key}
					value={records[key]}
				/>
			)
		}
		</div>
	)
}
