import { Record } from "./Record";

export function Records({ records }) {
	return (
		<div className="Records">
			records
			<div>	{
				records?.map(record =>
					<Record
						key={record.key.toString()}
						data={record.data}
					/>
				)
			}
			</div>
		</div>
	);
}
