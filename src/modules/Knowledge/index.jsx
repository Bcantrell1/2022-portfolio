import React from 'react';

import { ThemeProvider } from 'styled-components';
import { lightTheme } from '../../globals/Themes';

import Outline from '../Global/Outline';
import ArcText from '../../globals/ArcText';

import { Box, Container, Title, Description } from './components/styled';

const Knowledge = () => {
	return (
		<ThemeProvider theme={lightTheme}>
			<Box>
				<Outline />
				<ArcText />
				<Container>
					<Title>Full Stack Developer</Title>
					<Description>
						Bringing ideas and products to life while keeping it
						clean and simple.
					</Description>
					<Description>
						<strong>I ENJOY WORKING WITH</strong>
						<br />
						React, Vue, Html, Css, Vanilla Javascript, Scss,
						Firebase, and many more.
					</Description>
					<Description>
						<strong>Tooling</strong>
						<br />
						VS code, Postman, Docker, MySQL Workbench
					</Description>
				</Container>
				<Container>
					<Title>Software Engineer</Title>
					<Description>
						Applying the principles of engineering to software
						development.
					</Description>
					<Description>
						<strong>Designing</strong>
						<br />
						<ul>
							<li>Modeling</li>
							<li>Simulating</li>
							<li>Testing</li>
							<li>Quality Assurance</li>
						</ul>
					</Description>
					<Description>
						<strong>Tooling</strong>
						<br />
						GitHub, VS code, Jest, Web Services (AWS, Azure, etc)
					</Description>
				</Container>
			</Box>
		</ThemeProvider>
	);
};

export default Knowledge;
