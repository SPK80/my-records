import React, { useEffect, useState } from 'react';
import Records from './Records';
import RecordInput from './RecordInput';
import recordsAPI from './recordsAPI';
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
				console.log(res)
				setInputRecord(initalNewRecord)
				setShowEditor(false)
				getAllRecords()
			})
			.catch(console.error)
	}

	function postNewRecord(id, text) {
		recordsAPI.post({ record: { id, text } })
			.then(res => {
				console.log(res)
				setInputRecord(initalNewRecord)
				setShowEditor(false)
				getAllRecords()
			})
			.catch(console.error)
	}

	function putRecord(id, text) {
		recordsAPI.put({ record: { id, text } })
			.then(res => {
				console.log(res)
				setInputRecord(initalNewRecord)
				setShowEditor(false)
				getAllRecords()
			})
			.catch(console.error)
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
							onNameChanged={(name) => { setInputRecord(prev => ({ ...prev, name })) }}
							onTextChanged={(text) => { setInputRecord(prev => ({ ...prev, text })) }}
							onPostClick={() => {
								saveRecord(inputRecord.id, inputRecord.text)
							}}
						/>
					)
					: <ToolsBar
						onAdd={() => setShowEditor(true)}
					/>
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