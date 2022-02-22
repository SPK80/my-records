import React, { useEffect, useState } from 'react';
import Records from './Records';
import RecordInput from './RecordInput';
import recordsAPI from './recordsAPI';

import Button from './Button.jsx';

export default function RecordsContainer() {
	const initalNewRecord = {
		name: '',
		text: ''
	}
	const [records, setRecords] = useState({})
	const [newRecord, setNewRecord] = useState(initalNewRecord)

	function getAllRecords() {
		recordsAPI.get()
			.then(res => {
				const records = res.data.data;
				setRecords(records);
			})
		return {}
	}

	function postNewRecord() {
		const record = {
			id: newRecord.name,
			text: newRecord.text
		}

		recordsAPI.post({ record })
			.then(res => {
				console.log(res);
				setNewRecord(initalNewRecord)
				getAllRecords();
			})
			.catch(error => console.error(error))
	}

	useEffect(() => {
		getAllRecords()
	}, [])

	function clearRecords() {
		console.log('clearRecords');
		// axios.delete()
	}

	return (
		<div>
			<RecordInput
				record={newRecord}
				onNameChanged={(name) => { setNewRecord(prev => ({ ...prev, name })) }}
				onTextChanged={(text) => { setNewRecord(prev => ({ ...prev, text })) }}
			/>
			<Button
				caption='Add'
				click={() => { postNewRecord() }}
			/>
			<Button
				caption='Clear'
				click={() => { clearRecords() }}
			/>
			<Records records={records} />
		</div>
	)

}
