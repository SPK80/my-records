import './App.css';
import Records from './Records';
import Header from './Header';

function App() {
	return (
		<div className="App">
			<Header />
			<Records records={[{ key: 0, data: 'test0' }]} />
		</div>
	);
}

export default App;