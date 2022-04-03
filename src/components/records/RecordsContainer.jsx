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
		setInputRecordState(initalInputRecord);
		setInputShow(true);
	}

	function editRecord(id, text) {
		setInputRecordState({ id, text });
		setInputShow(true);
	}

	useEffect(getAllRecords, [])

	function delRecord(id) {
		recordsAPI.delete(id)
			.then(getAllRecords)
			.catch(console.error)
		return {}
	}

	const initalInputRecord = { id: '', text: '' };
	const [inputRecordState, setInputRecordState] = useState(initalInputRecord);
	const [inputShow, setInputShow] = useState(false);

	return (
		<div>
			{
				inputShow
					? (
						<RecordInputContainer
							record={inputRecordState}
							saved={() => {
								getAllRecords();
								setInputRecordState(initalInputRecord);
								setInputShow(false);

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