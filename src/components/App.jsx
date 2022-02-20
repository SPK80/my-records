import './App.css';
import Header from './Header';
import RecordsContainer from "./RecordsContainer";
import NewRecordContainer from './NewRecordContainer.jsx';

function App() {
	return (
		<div className="App">
			<Header />
			<NewRecordContainer />
			<RecordsContainer />
		</div>
	);
}

export default App;