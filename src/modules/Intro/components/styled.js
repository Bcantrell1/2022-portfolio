import { motion } from 'framer-motion';
import styled from 'styled-components';

export const BorderBox = styled(motion.div)`
	position: absolute;
	border-radius: 10px;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);

	width: 65vw;
	height: 55vh;
	display: flex;

	background: linear-gradient(
				to right,
				${(props) => props.theme.body} 50%,
				${(props) => props.theme.text} 50%
			)
			bottom,
		linear-gradient(
				to right,
				${(props) => props.theme.body} 50%,
				${(props) => props.theme.text} 50%
			)
			top;
	background-repeat: no-repeat;
	background-size: 100% 2px;
	border-left: 2px solid ${(props) => props.theme.body};
	border-right: 2px solid ${(props) => props.theme.text};

	z-index: 1;
`;

export const InnerBox = styled.div`
	width: 50%;
	position: relative;
	display: flex;

	.pic {
		position: absolute;
		bottom: 0;
		left: 50%;
		transform: translate(-50%, 0%);
		width: 100%;
		height: auto;
	}
`;

export const Text = styled.div`
	font-size: calc(1em + 0.89vw);
	color: ${(props) => props.theme.body};
	padding: 1rem 5rem 1rem 0.4rem;
	cursor: pointer;

	display: flex;
	flex-direction: column;
	justify-content: space-evenly;

	& > *:last-child {
		color: ${(props) => `rgba(${props.theme.bodyRgba},0.6)`};
		font-size: calc(0.5rem + 1.5vw);
		font-weight: 300;
	}
`;
