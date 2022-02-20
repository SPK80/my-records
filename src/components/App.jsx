import './App.css';
import Button from './Button.jsx';
import Header from './Header';
import RecordsContainer from "./RecordsContainer";
import NewRecord from './NewRecord.jsx';

function App() {
	return (
		<div className="App">
			<Header />
			<NewRecord />
			<RecordsContainer />
		</div>
	);
}

export default App;