import { ReactNode } from 'react'
import styled from 'styled-components'

type TableProps = {
	children: ReactNode
	width?: string
	$height?: string
	$background?: string
	$margin?: string
	$borderRadius?: string
}

const StyledTable = styled.div<TableProps>`
	width: ${props => props.width};
	height: ${props => props.$height};
	background: ${props => props.$background};
	margin: ${props => props.$margin || '0'};
	border-radius: ${props => props.$borderRadius || '0'};
	overflow: hidden;
	display: grid;
	grid-template-rows: auto 1fr auto;
	border: 1px solid #eef0f4;
`

export function Table(props: TableProps): JSX.Element {
	return <StyledTable {...props} />
}
