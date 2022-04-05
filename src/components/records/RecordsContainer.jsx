import React, { useEffect, useState } from 'react';
import Records from './Records';
import RecordInput from './RecordInput';
import recordsAPI from '../../api/recordsAPI';
import ToolsBar from './ToolsBar';

export default function RecordsContainer() {
	const initalNewRecord = {
		id: '',
		text: ''
	}
	const [records, setRecords] = useState({})
	const [inputRecord, setInputRecord] = useState(initalNewRecord)

	function getAllRecords() {
		recordsAPI.get()
			.then(res => {
				const records = res.data.data;
				setRecords(records);
			})
			.catch(console.error)
		return {}
	}

	useEffect(getAllRecords, [])

	function saveRecord(id, text) {
		(
			records.hasOwnProperty(id)
				? recordsAPI.put({ record: { id, text } })
				: recordsAPI.post({ record: { id, text } })
		)
			.then(res => {
				// console.log(res)
				setInputRecord(initalNewRecord)
				setShowEditor(false)
				getAllRecords()
			})
			.catch(console.error)
	}

	function editRecord(id, text) {
		setInputRecord({ id, text });
		setShowEditor(true);
	}

	function delRecord(id) {
		recordsAPI.delete(id)
			.then(getAllRecords)
			.catch(console.error)
		return {}
	}

	const [showEditor, setShowEditor] = useState(false);

	return (
		<div>
			{
				showEditor
					? (
						<RecordInput
							record={inputRecord}
							onNameChanged={(id) => { setInputRecord(prev => ({ ...prev, id })) }}
							onTextChanged={(text) => { setInputRecord(prev => ({ ...prev, text })) }}
							onPostClick={() => saveRecord(inputRecord.id, inputRecord.text)}
						/>
					)
					: <ToolsBar
						onAdd={() => setShowEditor(true)}
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