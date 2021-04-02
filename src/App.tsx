import { FC } from 'react';
import { Reset } from 'styled-reset';

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
