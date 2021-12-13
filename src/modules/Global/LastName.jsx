import React from 'react';
import styled from 'styled-components';
import { DarkTheme } from '../../globals/Themes';

const Name = styled.h1`
	display: inline-block;
	color: ${(props) =>
		props.color === 'dark' ? DarkTheme.text : DarkTheme.body};
	font-family: 'Pacifico', cursive;

	position: fixed;
	left: 2rem;
	top: 2rem;
	z-index: 3;
`;

const LastName = (props) => {
	return <Name color={props.theme}>Cantrell</Name>;
};

export default LastName;
