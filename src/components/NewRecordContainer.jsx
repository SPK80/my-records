import React from 'react';
import axios from 'axios';
import NewRecord from './NewRecord.jsx';

export default class NewRecordContainer extends React.Component {

	state = {
		name: '',
		text: ''
	}

	#post() {
		const record = {}
		record[this.state.name] = this.state.text

		axios.post(`http://localhost:8000/api/records`, { record })
			.then(res => {
				console.log(res);
				console.log(res.data);
			})
	}

	render() {
		console.log(this.state);

		return (
			<NewRecord
				onNameChanged={(name) => { this.setState({ name }) }}
				onTextChanged={(text) => { this.setState({ text }) }}
				onAddClick={() => { this.#post() }}
			/>
		)
	}

}
