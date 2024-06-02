import React from 'react'
import styled from 'styled-components'

enum Direction {
	Row = 'row',
	Column = 'column',
}

type FlexProps = {
	children: React.ReactNode
	direction?: Direction
	align?: string
	$justifyContent?: string
	$margin?: string
	$height?: string
}

const StyledFlex = styled.div<FlexProps>`
	display: flex;
	flex-direction: ${props => props.direction || Direction.Row};
	align-items: ${props => props.align || 'flex-start'};
	justify-content: ${props => props.$justifyContent || 'flex-start'};
	margin: ${({ $margin }) => $margin || '0'};
	height: ${props => props.$height || 'auto'};
`

export function Flex(props: FlexProps): JSX.Element {
	return <StyledFlex {...props} />
}
