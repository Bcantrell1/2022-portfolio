import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { ResetIcon } from '../../globals/SVGs';

const Reset = styled.div`
	position: fixed;
	top: 2rem;
	left: 50%;
	transform: translate(-50%, 0);

	background-color: #fcf6f4;
	padding: 0.3rem;
	border-radius: 50%;

	width: 2.5rem;
	height: 2.5rem;

	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 3;

	cursor: pointer;

	& > *:first-child {
		text-decoration: none;
		color: inherit;
	}

	&:hover {
		background-color: lightgreen;
		box-shadow: 0 0 10px 5px green;
	}
`;

const ResetButton = () => {
	return (
		<Reset>
			<NavLink to="/">
				<ResetIcon width={45} height={30} fill="currentColor" />
			</NavLink>
		</Reset>
	);
};

export default ResetButton;
