import React, { useState } from 'react';

import { motion } from 'framer-motion';
import {
	Contact,
	Center,
	Container,
	DarkDiv,
	MainContainer,
	BottomItems,
	WORK,
	KNOWLEDGE,
	ABOUT,
} from './components/styled';

import Intro from '../Intro';
import Outline from '../Global/Outline';

import { MountainBike } from '../../globals/SVGs';

const LandingPage = () => {
	const [click, setClick] = useState(false);
	const handleClicked = () => setClick(!click);

	return (
		<MainContainer>
			<DarkDiv click={click} />
			<Container>
				<Outline click={click} />
				<Center click={click}>
					<MountainBike
						onClick={() => handleClicked()}
						width={click ? 120 : 200}
						height={click ? 120 : 200}
						fill="currentColor"
					/>
					<span></span>
				</Center>
				<Contact
					target="_blank"
					to={{ pathname: 'mailto:bribri546@gmail.com' }}
				>
					<motion.h2
						initial={{
							y: -200,
							transition: {
								type: 'spring',
								duration: 1.5,
								delay: 1,
							},
						}}
						animate={{
							y: 0,
							transition: {
								type: 'spring',
								duration: 1.5,
								delay: 1,
							},
						}}
						whileHover={{ scale: 1.2 }}
						whileTap={{ scale: 0.6 }}
					>
						Hit me up!
					</motion.h2>
				</Contact>
				<ABOUT to="/about">
					<motion.h2
						initial={{
							y: -200,
							transition: {
								type: 'spring',
								duration: 1.5,
								delay: 1,
							},
						}}
						animate={{
							y: 0,
							transition: {
								type: 'spring',
								duration: 1.5,
								delay: 1,
							},
						}}
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.6 }}
					>
						About
					</motion.h2>
				</ABOUT>
				<WORK to="/work" click={+click}>
					<motion.h2
						initial={{
							y: -200,
							transition: {
								type: 'spring',
								duration: 1.5,
								delay: 1,
							},
						}}
						animate={{
							y: 0,
							transition: {
								type: 'spring',
								duration: 1.5,
								delay: 1,
							},
						}}
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.6 }}
					>
						Work
					</motion.h2>
				</WORK>
				<BottomItems>
					<KNOWLEDGE to="/knowledge" click={+click}>
						<motion.h2
							initial={{
								y: 200,
								transition: {
									type: 'spring',
									duration: 1.5,
									delay: 1,
								},
							}}
							animate={{
								y: 0,
								transition: {
									type: 'spring',
									duration: 1.5,
									delay: 1,
								},
							}}
						>
							Knowledge
						</motion.h2>
					</KNOWLEDGE>
				</BottomItems>
			</Container>
			{click ? <Intro click={click} /> : null}
		</MainContainer>
	);
};

export default LandingPage;
