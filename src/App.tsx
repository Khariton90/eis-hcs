import styled from 'styled-components'
import { Flex } from './components/Flex'
import { TableContainer } from './components/TableContainer'
import { TableTitle } from './components/TableTitle'
import { Grid } from './components/Grid'
import { Table } from './components/Table'
import { TableHead } from './components/TableHead'
import { TableFoot } from './components/TableFoot'
import { TableBody } from './components/TableBody'
import { TableColumn } from './components/TableColumn'
import { TableRow } from './components/TableRow'
import { Pagination } from './components/Pagination'
import image from './assets/cold-water.svg'
import { TableButton } from './components/TableButton'

const tableListTitle = [
	'№',
	'Тип',
	'Дата установки',
	'Автоматический',
	'Текущие показания',
	'Адрес',
	'Примечание',
]

const data = [
	'ТПЛ',
	'12.01.2023',
	'да',
	'333467.6636',
	'г Санкт-Петербург, ул Тарасова, д. 0 корп. 0 лит. А, кв. 1',
	'Подвал, парадная 1',
]

const Wrapper = styled.div`
	width: 100%;
	padding: 0 1rem;
	background-color: #fff;
`

function App() {
	const arr = Array.from({ length: 20 }, (_, i) => i + 1)

	return (
		<Wrapper>
			<Flex
				$justifyContent='center'
				$margin='1rem'
				$height='calc(100vh - 4rem);'
			>
				<TableContainer
					width='1440px'
					$background='#F8F9FA'
					$padding='1rem'
					$height='100%'
				>
					<TableTitle>Список счётчиков</TableTitle>
					<Table
						$background='#FFF'
						$margin='1rem 0 0 0'
						$borderRadius='8px'
						$height='calc(100% - 3rem)'
					>
						<TableHead
							$padding='8px 12px'
							$background='#F0F3F7'
							$size='13px'
							$color='#697180'
						>
							<Grid>
								{tableListTitle.map(item => (
									<div key={item}>{item}</div>
								))}
							</Grid>
						</TableHead>
						<TableBody>
							{arr.map(el => (
								<TableRow key={el}>
									<Grid>
										<TableColumn key={el}>{el}</TableColumn>
										{data.map((item, index) => (
											<TableColumn key={item}>
												{!index && <img src={image} />}
												<p>{item}</p>
											</TableColumn>
										))}
										<TableColumn>
											<TableButton>
												<svg
													width='40'
													height='40'
													viewBox='0 0 40 40'
													fill='none'
													xmlns='http://www.w3.org/2000/svg'
												>
													<rect width='40' height='40' rx='8' fill='#FED7D7' />
													<path
														d='M19.3333 18V24H18V18H19.3333Z'
														fill='#9B2C2C'
													/>
													<path d='M22 18V24H20.6666V18H22Z' fill='#9B2C2C' />
													<path
														fill-rule='evenodd'
														clip-rule='evenodd'
														d='M16.8528 12.6667H23.1472L23.8138 14.6667H26.6666V16H25.3333L24.6666 27.3334H15.3333L14.6666 16H13.3333V14.6667H16.1861L16.8528 12.6667ZM17.5916 14.6667H22.4084L22.1861 14H17.8138L17.5916 14.6667ZM16 16L16.6666 26H23.3333L24 16H16Z'
														fill='#9B2C2C'
													/>
												</svg>
											</TableButton>
										</TableColumn>
									</Grid>
								</TableRow>
							))}
						</TableBody>

						<TableFoot>
							<Flex $justifyContent='flex-end'>
								<Pagination />
							</Flex>
						</TableFoot>
					</Table>
				</TableContainer>
			</Flex>
		</Wrapper>
	)
}

export default App
