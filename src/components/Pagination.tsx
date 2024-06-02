import { useState } from 'react'
import styled, { css } from 'styled-components'

// const MAX_COUNT = 3

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9]

type PaginationItemProps = {
	active?: boolean
	onChange: (item: number) => void
	value?: number
	$ellipsis?: boolean
	$order?: number
}

type ButtonType = Omit<PaginationItemProps, 'onChange'>

const StyledPaginationItem = styled.button<ButtonType>`
	width: 32px;
	height: 32px;
	padding: 8px 12px;
	border-radius: 6px;
	border: 1px solid #ced5de;
	cursor: pointer;
	color: #1f2939;
	font-size: 14px;
	background: #fff;
	display: flex;
	justify-content: center;

	${props =>
		props.$ellipsis &&
		css`
			pointer-events: none;
		`}

	${props =>
		props.active &&
		css`
			background: #f0f3f7;
		`}

    &:hover {
		background: #f0f3f7;
		opacity: 0.95;
	}
`

export function PaginationItem({
	onChange,
	...props
}: PaginationItemProps): JSX.Element {
	return (
		<li
			style={{ order: props.$order }}
			onClick={() => onChange(props.value || 0)}
		>
			{props.$ellipsis ? (
				<StyledPaginationItem {...props}>...</StyledPaginationItem>
			) : (
				<StyledPaginationItem {...props}>{props.value}</StyledPaginationItem>
			)}
		</li>
	)
}

const StyledPaginationList = styled.ul`
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	padding: 0;
	margin: 0;
	list-style: none;
	gap: 8px;
`

export function PaginationList(): JSX.Element {
	const [, setCount] = useState<number>(0)

	const onChange = (item: number) => {
		setCount(() => item - 1)
	}

	const slicedItems =
		items.length >= 6
			? [...items.slice(0, 3), ...items.slice(items.length - 3, items.length)]
			: items

	return (
		<StyledPaginationList>
			<PaginationItem onChange={onChange} $ellipsis={true} $order={3} />
			{slicedItems.map((item, index) => (
				<PaginationItem
					$ellipsis={false}
					$order={index}
					onChange={onChange}
					key={item}
					value={item}
				/>
			))}
		</StyledPaginationList>
	)
}

const StyledPagination = styled.nav`
	margin: 0;
`

export function Pagination(): JSX.Element {
	return (
		<StyledPagination>
			<PaginationList></PaginationList>
		</StyledPagination>
	)
}
