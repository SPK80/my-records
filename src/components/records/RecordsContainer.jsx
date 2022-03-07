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

	useEffect(getAllRecords, [])

	function postNewRecord(id, text) {
		recordsAPI.post({ record: { id, text } })
			.then(res => {
				console.log(res)
				setNewRecord(initalNewRecord)
				setShowEditor(false)
				getAllRecords()
			})
			.catch(error => console.error(error))
	}

	function putRecord(id, text) {
		recordsAPI.put({ record: { id, text } })
			.then(res => {
				console.log(res)
				setNewRecord(initalNewRecord)
				getAllRecords()
			})
			.catch(error => console.error(error))
	}



	const [selectedIds, setSelectedIds] = useState([])
	const [selectionMode, setSelectionMode] = useState(false)

	useEffect(() => {
		console.log('selected:', selectedIds);
	}, [selectedIds])

	async function delSelectedRecords() {
		if (selectedIds.length < 1) return;

		try {
			for (const id of selectedIds) {
				const res = await recordsAPI.delete(id)
				console.log(res);
			}
			getAllRecords();
			setSelectedIds([]);
		}
		catch (error) {
			console.error(error)
		}
	}

	function editRecord(id, text) {
		setNewRecord({ id, text });
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

			<Button
				caption='Add'
				click={() => setShowEditor(true)}
			/>

			{showEditor ? (<RecordInput
				record={newRecord}
				onNameChanged={(name) => { setNewRecord(prev => ({ ...prev, name })) }}
				onTextChanged={(text) => { setNewRecord(prev => ({ ...prev, text })) }}
				onPostClick={() => postNewRecord(newRecord.name, newRecord.text)}
			/>) : ''
			}

			<Records
				records={records}
				mode={{ selection: selectionMode }}
				onSelectionChanged={(id, checked) => {
					if (checked)
						setSelectedIds(prev => [...prev, id])
					else
						setSelectedIds(prev => {
							const s = [...prev];
							s.splice(prev.indexOf(id), 1)
							return s
						})
				}}
				editClick={editRecord}
				delClick={delRecord}
			/>

		</div>
	)
}