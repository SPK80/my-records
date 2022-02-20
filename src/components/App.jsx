import './App.css';
import Button from './Button.jsx';
import Header from './Header';
import RecordsContainer from "./RecordsContainer";
import TextArea from './TextArea.jsx';


function App() {
	return (
		<div className="App">
			<Header />
			<RecordsContainer />
			<TextArea />
			<Button caption='Add' />
		</div>
	);
}

export default App;