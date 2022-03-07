import Record from "./Record";

export default function Records({ records, mode, onSelectionChanged, editClick, delClick }) {
	return (
		<div className="Records"> {
			Object.keys(records).reverse().map(key =>
				<div key={key}>
					<Record
						mode={mode}
						name={key}
						value={records[key]}
						onSelectionChanged={onSelectionChanged}
						editClick={editClick}
						delClick={delClick}
					/>
				</div>
			)
		}
		</div>
	)
}
