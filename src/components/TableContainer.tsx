import { ReactNode } from 'react'
import styled from 'styled-components'

type TableContainerProps = {
	children: ReactNode
	width?: string
	$height?: string
	$background?: string
	$padding?: string
}

const StyledTable = styled.div<TableContainerProps>`
	width: ${props => props.width};
	height: ${props => props.$height || 'auto'};
	background: ${props => props.$background};
	padding: ${props => props.$padding || '0'};
	max-height: 1024px;
`

export function TableContainer(props: TableContainerProps): JSX.Element {
	return <StyledTable {...props} />
}
