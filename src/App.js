//Internal
import { Route, Switch, useLocation } from 'react-router';

//Styles / Tools
import { ThemeProvider } from 'styled-components';
import { lightTheme } from './globals/Themes';
import GlobalStyle from './globals/globalStyles';
import { AnimatePresence } from 'framer-motion';

//Components
import LandingPage from './modules/LandingPage';
import AboutPage from './modules/AboutPage';
import WorkPage from './modules/WorkPage';
import Knowledge from './modules/Knowledge';

const App = () => {
	const location = useLocation();
	return (
		<>
			<GlobalStyle />
			<ThemeProvider theme={lightTheme}>
				<AnimatePresence exitBeforeEnter>
					<Switch location={location} key={location.pathname}>
						<Route exact path="/" component={LandingPage} />
						<Route exact path="/about" component={AboutPage} />
						<Route exact path="/work" component={WorkPage} />
						<Route exact path="/knowledge" component={Knowledge} />
					</Switch>
				</AnimatePresence>
			</ThemeProvider>
		</>
	);
};

export default App;
