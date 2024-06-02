import { ReactNode } from 'react'
import styled from 'styled-components'

type TableTitleProps = {
	children: ReactNode
}

const StyledTableTitle = styled.h1`
	font-size: 1.5rem;
	font-weight: 500;
	line-height: 2rem;
	color: #1f2939;
`

export function TableTitle(props: TableTitleProps): JSX.Element {
	return <StyledTableTitle {...props} />
}
