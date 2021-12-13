import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled.div`
	background-color: ${(props) => props.theme.body};

	height: 300vh;
	position: relative;
	display: flex;
	align-items: center;
`;

export const Box = styled(motion.ul)`
	position: fixed;
	top: 12rem;
	left: calc(10rem);
	height: 40vh;
	display: flex;

	color: white;
`;

export const Rotate = styled.span`
	display: block;
	position: fixed;
	right: 1rem;
	bottom: 1rem;
	width: 80px;
	height: 80px;
	z-index: 1;
`;
