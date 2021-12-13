import React from 'react';
import LastName from './LastName';
import ResetButton from './ResetButton';
import Socials from './Socials';
import { useLocation } from 'react-router';

const Outline = ({ click }) => {
	const location = useLocation();
	let currentPath = location.pathname;
	const toggleTheme = click ? 'dark' : 'light';

	const checkPath = (path) => {
		if (path === '/work' || path === '/about') return 'dark';
		return toggleTheme;
	};
	return (
		<>
			<ResetButton />
			<LastName theme={checkPath(currentPath)} />
			<Socials theme={checkPath(currentPath)} />
		</>
	);
};

export default Outline;
