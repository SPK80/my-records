import './App.css';
import Button from './Button.jsx';
import Header from './Header';
import RecordsContainer from "./RecordsContainer";


function App() {
	return (
		<div className="App">
			<Header />
			<Button caption='Add' />
			<Button caption='Del' />
			<RecordsContainer />

		</div>
	);
}

export default App;