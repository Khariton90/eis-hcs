import { ReactNode } from 'react'
import styled from 'styled-components'

type TableColumnProps = {
	children: ReactNode
}

const StyledTableColumn = styled.div`
	padding: 6px 12px;
	overflow: hidden;
	font-size: 14px;
	color: #1f2939;
	height: 52px;
	white-space: nowrap;
	text-overflow: ellipsis;
	display: flex;
	align-items: center;
	column-gap: 11.33px;

	& p {
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}

	&:nth-child(1) {
		color: #5e6674;
	}

	&:nth-child(2) {
		color: #1d2432;
	}

	&:nth-child(7) {
		color: #5e6674;
	}
`

export function TableColumn(props: TableColumnProps): JSX.Element {
	return <StyledTableColumn {...props} />
}
