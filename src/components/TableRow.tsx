import { ReactNode } from 'react'
import styled from 'styled-components'

type TableRowProps = {
	children: ReactNode
}

const StyledTableRow = styled.div`
	background: #fff;
	border-bottom: 1px solid #e0e5eb;
	&:hover {
		background: #f7f8f9;
		cursor: pointer;

		& button {
			display: flex;
		}
	}

	&:last-child {
		border-bottom: 1px solid transparent;
	}
`

export function TableRow(props: TableRowProps): JSX.Element {
	return <StyledTableRow {...props} />
}
