import { useState } from 'react';
import './App.css';
import Header from './Header';
import Login from './Login';
import RecordsContainer from "./records";

function App() {
	const [userId, setUserId] = useState();

	return (
		<div className="App">
			<Header />
			{userId ?
				<RecordsContainer />
				:
				<Login onLoged={(id) => setUserId(id)} />}
		</div>
	);
}

export default App;