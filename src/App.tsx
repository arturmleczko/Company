import { Component } from 'react';
import { Reset } from 'styled-reset';
import { BrowserRouter as Router } from 'react-router-dom';

import GlobalStyle from './styledHelpers/globalStyles';

import { Navbar, HomePage } from './components';

class App extends Component {
	render() {
		return (
			<>
				<Reset />
				<GlobalStyle />
				<Router>
					<Navbar />
					<HomePage />
				</Router>
			</>
		);
	}
}

export default App;
