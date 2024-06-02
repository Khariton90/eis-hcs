import { ReactNode } from 'react'
import styled from 'styled-components'

type GridProps = {
	children: ReactNode
	columns?: string
}

const StyledGrid = styled.div<GridProps>`
	display: grid;
	grid-template-columns: ${() =>
		`40px 80px 120px 130px 130px repeat(2, 1fr) 64px`};
	gap: 8px;
`

export function Grid(props: GridProps): JSX.Element {
	return <StyledGrid {...props} />
}
