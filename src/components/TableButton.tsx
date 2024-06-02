import { ReactNode } from 'react'
import styled from 'styled-components'

type TableButtonProps = {
	children: ReactNode
}

const StyledButton = styled.button`
	display: none;
	border: none;
	background: transparent;
	cursor: pointer;
	height: 40px;
	width: 40px;

	&:hover {
		opacity: 0.8;
	}
`

export function TableButton(props: TableButtonProps): JSX.Element {
	return <StyledButton {...props} />
}
