import { ReactNode } from 'react'
import styled from 'styled-components'

type TableFootProps = {
	children: ReactNode
}

const StyledTableFoot = styled.div`
	background: #fff;
	padding: 8px 16px;
	border-top: 1px solid #eef0f4;
`

export function TableFoot(props: TableFootProps): JSX.Element {
	return <StyledTableFoot {...props} />
}
