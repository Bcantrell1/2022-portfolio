import React from 'react';
import { ThemeProvider } from 'styled-components';
import { DarkTheme } from '../../globals/Themes';
import { Box, Main, GolfCart } from './components/styled';
import golfCart from '../../assets/svg/golf-cart.svg';
import Outline from '../Global/Outline';

import RainLogo from '../../globals/RainLogo';

const AboutPage = () => {
	return (
		<ThemeProvider theme={DarkTheme}>
			<Outline />

			<Box>
				<RainLogo />
				<GolfCart>
					<img src={golfCart} alt="golf-cart" />
				</GolfCart>
				<Main>
					Hey,
					<br /> <br />
					My name is Brian Cantrell, and I am from Arizona! I enjoy
					solving problems and building new things more than anything!
					<br /> <br />
					If I'm not plugging away on some project you'll likely find
					me on the golf course or operating some kind of motor
					vehicle with my friends and family. 🛵 🏌🏼‍♂️
					<br /> <br />I love collaborating and getting involved in
					new projects, so reach out if you are interested in building
					elegant projects with me!
					<br /> <br />
					-Give me a shout on any of my socials
				</Main>
			</Box>
		</ThemeProvider>
	);
};

export default AboutPage;
