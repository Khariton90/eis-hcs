import { ReactNode } from 'react'
import styled from 'styled-components'

type TableBodyProps = {
	children: ReactNode
}

const StyledBody = styled.div<TableBodyProps>`
	overflow-y: scroll;
	&::-webkit-scrollbar {
		width: 6px;
		background-color: transparent;
	}

	&::-webkit-scrollbar-thumb {
		border-radius: 4px;
		background-color: #5e6674;
	}

	&::-webkit-scrollbar-track {
		background-color: transparent;
	}
`

export function TableBody(props: TableBodyProps): JSX.Element {
	return <StyledBody {...props} />
}
