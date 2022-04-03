import React, { useEffect, useState } from 'react';
import Records from './Records';
import RecordInputContainer from './RecordInput';
import recordsAPI from './recordsAPI';
import ToolsBar from './ToolsBar';

export default function RecordsContainer() {

	const [records, setRecords] = useState({})

	function getAllRecords() {
		recordsAPI.get()
			.then(res => {
				const records = res.data.data;
				setRecords(records);
			})
			.catch(console.error)
		return {}
	}

	function newRecord() {
		setInputRecord(initalInputRecord);
		setShowInput(true);
	}

	function editRecord(id, text) {
		setInputRecord({ id, text });
		setShowInput(true);
	}

	useEffect(getAllRecords, [])

	function delRecord(id) {
		recordsAPI.delete(id)
			.then(getAllRecords)
			.catch(console.error)
		return {}
	}

	const initalInputRecord = { id: '', text: '' };
	const [inputRecord, setInputRecord] = useState(initalInputRecord);
	const [showInput, setShowInput] = useState(false);

	return (
		<div>
			{
				showInput
					? (
						<RecordInputContainer
							record={inputRecord}
							saved={() => {
								getAllRecords();
								setInputRecord(initalInputRecord);
								setShowInput(false);

							}}
						/>
					)
					: <ToolsBar
						onAdd={newRecord}
					/>
			}

			<Records
				records={records}
				editClick={editRecord}
				delClick={delRecord}
			/>

		</div>
	)
}