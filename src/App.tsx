import { FC } from 'react';
import GlobalStyle from './styledHelpers/globalStyles';
import { NavBar } from './components';

const App: FC = () => {
	return (
		<>
			<GlobalStyle />
			<NavBar />
		</>
	);
};

export default App;
