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
		setInputRecordState({
			show: true,
			record: { id: '', text: '' }
		});
	}

	function editRecord(id, text) {
		setInputRecordState({
			show: true,
			record: { id, text }
		});
	}

	useEffect(getAllRecords, [])

	function delRecord(id) {
		recordsAPI.delete(id)
			.then(getAllRecords)
			.catch(console.error)
		return {}
	}

	const initalInput = {
		show: false,
		record: {
			id: '',
			text: ''
		}
	}

	const [inputRecordState, setInputRecordState] = useState(initalInput);

	return (
		<div>
			{
				inputRecordState.show
					? (
						<RecordInputContainer
							record={inputRecordState.record}
							saved={() => {
								getAllRecords()
								setInputRecordState(initalInput)
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