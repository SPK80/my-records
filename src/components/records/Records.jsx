import Record from "./Record";

export default function Records({ records, onSelectionChanged, onEdit }) {
	return (
		<div className="Records"> {
			Object.keys(records).reverse().map(key =>
				<div key={key}>
					<Record
						name={key}
						value={records[key]}
						onSelectionChanged={onSelectionChanged}
						onEdit={onEdit}
					/>
				</div>
			)
		}
		</div>
	)
}
