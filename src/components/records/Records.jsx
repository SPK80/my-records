import Record from "./Record";

export default function Records({ records }) {
	return (
		<div className="Records"> {
			Object.keys(records).reverse().map(key =>
				<div key={key}>
					<input type='checkbox'></input>
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
