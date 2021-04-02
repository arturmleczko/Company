import { FC } from 'react';
import { Reset } from 'styled-reset';
import { BrowserRouter as Router } from 'react-router-dom';

import GlobalStyle from './styledHelpers/globalStyles';

import { Navbar, HomePage } from './components';

const App: FC = () => {
	return (
		<>
			<Reset />
			<GlobalStyle />
			<Navbar />
			<HomePage />
		</>
	);
};

export default App;
