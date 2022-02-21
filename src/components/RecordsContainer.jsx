import React, { useEffect, useState } from 'react';
import Records from './Records';
import axios from 'axios';
import NewRecord from './NewRecord.jsx';

export default function RecordsContainer() {
	const initalNewRecord = {
		name: '',
		text: ''
	}
	const [records, setRecords] = useState({})
	const [newRecord, setNewRecord] = useState(initalNewRecord)

	function getAllRecords() {
		// console.log('getAllRecords');
		axios.get(`http://localhost:8000/api/records`)
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

		axios.post(`http://localhost:8000/api/records`, { record })
			.then(res => {
				// console.log(res);
				setNewRecord(initalNewRecord)
				getAllRecords();
			})
			.catch(error => console.error(error))
	}

	useEffect(() => {
		getAllRecords()
	}, [])

	return (
		<div>
			<NewRecord
				record={newRecord}
				onNameChanged={(name) => { setNewRecord(prev => ({ ...prev, name })) }}
				onTextChanged={(text) => { setNewRecord(prev => ({ ...prev, text })) }}
				onAddClick={() => { postNewRecord() }}
			/>
			<Records records={records} />
		</div>
	)

}
