//Internal
import React from 'react';

//Styles
import { motion } from 'framer-motion';
import { BorderBox, InnerBox, Text } from './components/styled';

//Assets
import Pic from '../../assets/Images/profile-img.png';

const Intro = () => {
	return (
		<BorderBox
			initial={{ height: 0 }}
			animate={{ height: '55vh' }}
			transition={{ type: 'spring', duration: 2, delay: 1 }}
		>
			<InnerBox>
				<Text>
					<h1>Howdy,</h1>
					<h3>My name is Brian</h3>
					<h6>I'm a software engineer located in Arizona!</h6>
				</Text>
			</InnerBox>
			<InnerBox>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1, delay: 1.7 }}
				>
					<img className="pic" src={Pic} alt="Brian Avatar" />
				</motion.div>
			</InnerBox>
		</BorderBox>
	);
};

export default Intro;
