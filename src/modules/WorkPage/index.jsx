import React, { useRef, useEffect } from 'react';
import { Projects } from '../../data/ProjectData';

import { Container, Box, Rotate } from './components/styled';
import { ThemeProvider } from 'styled-components';
import { DarkTheme } from '../../globals/Themes';
import { GolfBall } from '../../globals/SVGs';

import Card from './components/Card';
import Outline from '../Global/Outline';

const container = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,

		transition: {
			staggerChildren: 0.5,
			duration: 0.5,
		},
	},
};

const WorkPage = () => {
	const ref = useRef(null);
	const golfball = useRef(null);

	useEffect(() => {
		let element = ref.current;

		const rotate = () => {
			element.style.transform = `translateX(${-window.pageYOffset}px)`;

			return (golfball.current.style.transform =
				'rotate(' + -window.pageYOffset + 'deg)');
		};

		window.addEventListener('scroll', rotate);
		return () => {
			window.removeEventListener('scroll', rotate);
		};
	}, []);

	return (
		<ThemeProvider theme={DarkTheme}>
			<Container>
				<Outline />
				<Box
					ref={ref}
					variants={container}
					intial="hidden"
					animate="show"
				>
					{Projects.map((project) => {
						return <Card key={project.id} data={project} />;
					})}
				</Box>
				<Rotate ref={golfball}>
					<GolfBall width={80} height={80} fill={DarkTheme.text} />
				</Rotate>
			</Container>
		</ThemeProvider>
	);
};

export default WorkPage;
