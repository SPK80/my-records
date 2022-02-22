import Record from "./Record";

export default function Records({ records, onSelectionChanged }) {
	return (
		<div className="Records"> {
			Object.keys(records).reverse().map(key =>
				<div key={key}>
					<input
						id={key}
						type='checkbox'
						onChange={(e) => onSelectionChanged(e.target.id, e.target.checked)}
					></input>
					<Record
						name={key}
						value={records[key]}
					/>
				</div>
			)
		}
		</div>
	)
}
