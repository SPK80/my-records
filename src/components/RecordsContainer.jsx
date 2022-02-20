import { useState } from 'react';
import Records from './Records';

export function RecordsContainer(props) {
	const [records, setData] = useState([{ key: 0, data: 'test0' }]);

	return (
		<Records records={records} />
	);

}
