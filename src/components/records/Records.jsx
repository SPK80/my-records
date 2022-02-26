import Record from "./Record";

export default function Records({ records, onSelectionChanged }) {
	return (
		<div className="Records"> {
			Object.keys(records).reverse().map(key =>
				<div key={key}>
					<Record
						name={key}
						value={records[key]}
						onSelectionChanged={onSelectionChanged}
					/>
				</div>
			)
		}
		</div>
	)
}
