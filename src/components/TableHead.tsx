import { ReactNode } from 'react'
import styled from 'styled-components'

type TableHeadProps = {
	children: ReactNode
	$color?: string
	$padding?: string
	$background?: string
	$size?: string
}

const StyledTableHead = styled.div<TableHeadProps>`
	color: ${props => props.$color || 'inherit'};
	padding: ${props => props.$padding || '0'};
	background: ${props => props.$background || 'inherit'};
	font-size: ${props => props.$size || 'inherit'};
	font-weight: 500;
`

export function TableHead(props: TableHeadProps): JSX.Element {
	return <StyledTableHead {...props} />
}
