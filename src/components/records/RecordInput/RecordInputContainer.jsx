import { useState } from 'react';
import recordsAPI from '../../../api/recordsAPI.js';
import RecordInput from './RecordInput';

export default function RecordInputContainer({ record, saved, canseled }) {

	const [inputRecord, setInputRecord] = useState(record)

	function saveRecord(id, text) {
		(
			record.id === ''
				? recordsAPI.post({ record: { id, text } })
				: recordsAPI.put({ record: { id, text } })
		)
			.then(res => {
				console.log(res)
				saved()
			})
			.catch(console.error)
	}

	const [recordChanged, setRecordChanged] = useState(false)


	return (
		<RecordInput
			record={inputRecord}
			changed={recordChanged}
			onNameChanged={(id) => {
				setInputRecord(prev => ({ ...prev, id }))
				if (!recordChanged) setRecordChanged(true)
			}}
			onTextChanged={(text) => {
				setInputRecord(prev => ({ ...prev, text }))
				if (!recordChanged) setRecordChanged(true)

			}}
			onPostClick={() => saveRecord(inputRecord.id, inputRecord.text)}
			onCanselClick={canseled}
		/>
	)
}