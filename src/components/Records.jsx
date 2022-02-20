import Record from "./Record";

export default function Records({ records }) {
	return (
		<div className="Records">
			<ul>	{
				records?.map(record =>
					<li key={record.key.toString()}>
						<Record
							data={record.data}
						/>
					</li>
				)
			}
			</ul>
		</div>
	);
}
