import './App.css';
import Button from './Button.jsx';
import Header from './Header';
import RecordsContainer from "./RecordsContainer";
import TextArea from './TextArea.jsx';

function App() {
	return (
		<div className="App">
			<Header />
			<TextArea />
			<Button caption='Add' />
			<RecordsContainer />
		</div>
	);
}

export default App;