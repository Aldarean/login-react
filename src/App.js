import React from 'react';
import './App.css';
import LoginContainer from './components/loginContainer/loginContainer';

class App extends React.Component {
	render() {
		return (
			<div className="App">
				<LoginContainer />
			</div>
		);
	}
}

export default App;
