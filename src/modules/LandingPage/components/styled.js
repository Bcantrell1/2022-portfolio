import styled, { keyframes } from 'styled-components';
import { NavLink } from 'react-router-dom';

const rotate = keyframes`
from{
    transform: rotate(0);
}
to{
    transform: rotate(-360deg);
}
`;

const spin = keyframes`
from{
    transform: scale(1);
}
to{
    transform: scale(1.5);
}
`;

export const ABOUT = styled(NavLink)`
	color: ${(props) => props.theme.text};
	position: absolute;
	top: 50%;
	right: calc(1rem + 2vw);
	transform: rotate(90deg) translate(-50%, -50%);
	text-decoration: none;
	z-index: 1;
`;

export const BottomItems = styled.div`
	position: absolute;
	bottom: 1rem;
	left: 0;
	right: 0;
	width: 100%;

	display: flex;
	justify-content: space-evenly;
`;

export const Center = styled.button`
	position: absolute;
	top: ${(props) => (props.click ? '85%' : '50%')};
	left: ${(props) => (props.click ? '92%' : '50%')};
	transform: translate(-50%, -50%);
	border: none;
	outline: none;
	background-color: transparent;
	cursor: pointer;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	transition: all 1s ease;

	&:hover > :first-child {
		animation-name: ${spin}, ${rotate};
		animation-duration: 1.5s, 1.5s;
		animation-timing-function: linear, linear;
		animation-iteration-count: infinite, infinite;
	}

	& > :last-child {
		display: ${(props) => (props.click ? 'none' : 'inline-block')};
		padding-top: 1rem;
	}
`;

export const Contact = styled(NavLink)`
	color: ${(props) => props.theme.text};
	position: absolute;
	top: 2rem;
	right: calc(1rem + 2vw);
	text-decoration: none;
	z-index: 1;
`;

export const Container = styled.div`
	padding: 2rem;
`;

export const DarkDiv = styled.div`
	position: absolute;
	top: 0;
	background-color: #000;
	bottom: 0;
	right: 50%;
	width: ${(props) => (props.click ? '50%' : '0%')};
	height: ${(props) => (props.click ? '100%' : '0%')};
	z-index: 1;
	transition: height 0.5s ease, width 1s ease 0.5s;
`;

export const MainContainer = styled.div`
	background: ${(props) => props.theme.body};
	width: 100vw;
	height: 100vh;
	overflow: hidden;

	position: relative;

	h2,
	h3,
	h4,
	h5,
	h6 {
		font-family: 'Karla', sans-serif;
		font-weight: 500;
	}
`;

export const KNOWLEDGE = styled(NavLink)`
	-webkit-background-clip: text;
  	background-image: ${(props) =>
		props.click
			? 'linear-gradient(to right, white 50%, black 50%);'
			: 'black'} 
  	-webkit-text-fill-color: transparent;
	color: ${(props) => props.theme.text};
	text-decoration: none;
	z-index: 1;

	&:hover {
		transform: scale(1.2);
		transition: all 0.5s;
	}

	&:active {
		transform: scale(0.6);
		transition: all 0.3s;
	}
`;

export const WORK = styled(NavLink)`
	color: ${(props) => (props.click ? props.theme.body : props.theme.text)};

	position: absolute;
	top: 50%;
	left: calc(1rem + 2vw);
	transform: translate(-50%, -50%) rotate(-90deg);
	text-decoration: none;
	z-index: 1;
`;
