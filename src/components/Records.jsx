import Record from "./Record";

export default function Records({ records }) {
	return (
		<div className="Records">
			<ul>	{
				records?.map(record =>
					<li>
						<Record
							key={record.key.toString()}
							data={record.data}
						/>
					</li>
				)
			}
			</ul>
		</div>
	);
}
