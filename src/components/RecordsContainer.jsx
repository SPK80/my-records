import React from 'react';
import Records from './Records';
import axios from 'axios';

export default class RecordsContainer extends React.Component {

	state = {
		records: {
			first: "first record",
			second: "second record",

		}
	}

	componentDidMount() {
		axios.get(`http://localhost:8000/api/records`)
			.then(res => {
				const records = res.data.data;
				this.setState({ records });
			})
	}

	render() {
		return (
			<Records records={this.state.records} />
		)
	}

}
