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
			.catch(error => console.error(error))
		return {}
	}

	useEffect(() => {
		getAllRecords()
	}, [])

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

	async function delSelectedRecords() {
		const selectedIds = [];
		try {
			for (const id of selectedIds) {
				const res = await recordsAPI.delete(id)
				console.log(res);
			}
			getAllRecords();
		}
		catch (error) {
			console.error(error)
		}

		// recordsAPI.delete()
		// 	.then(res => {
		// 		console.log(res);
		// 		getAllRecords();
		// 	})
		// 	.catch(error => console.error(error))
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
				caption='Del'
				click={() => { delSelectedRecords() }}
			/>
			<Records records={records} />
		</div>
	)

}
