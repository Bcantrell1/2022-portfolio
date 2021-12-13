import styled from 'styled-components';

export const Box = styled.div`
	background-color: ${(props) => props.theme.body};
	width: 100vw;
	height: 100vh;
	position: relative;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
`;

export const Container = styled.div`
	border: 2px solid ${(props) => props.theme.text};
	color: ${(props) => props.theme.text};
	background-color: ${(props) => props.theme.body};
	padding: 2rem;
	width: 30vw;
	height: 60vh;
	z-index: 3;
	line-height: 1.5;
	cursor: pointer;
	font-family: 'Ubuntu Mono', monospace;
	display: flex;
	flex-direction: column;
	opacity: 0.8;
	justify-content: space-between;
	&:hover {
		color: ${(props) => props.theme.body};
		background-color: ${(props) => props.theme.text};
	}
`;

export const Title = styled.h2`
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: calc(1em + 1vw);
	${Container}:hover & {
		& > * {
			fill: ${(props) => props.theme.body};
		}
	}
	& > *:first-child {
		margin-right: 1rem;
	}
`;

export const Description = styled.div`
	color: ${(props) => props.theme.text};
	font-size: calc(0.6em + 1vw);
	padding: 0.5rem 0;
	${Container}:hover & {
		color: ${(props) => props.theme.body};
	}
	strong {
		margin-bottom: 1rem;
		text-transform: uppercase;
	}
	ul,
	p {
		margin-left: 2rem;
	}
`;
