import { FC } from 'react';

import GlobalStyle from './styledHelpers/globalStyles';

import { Navbar, HomePage } from './components';

const App: FC = () => {
	return (
		<>
			<GlobalStyle />
			<Navbar />
			<HomePage />
		</>
	);
};

export default App;
