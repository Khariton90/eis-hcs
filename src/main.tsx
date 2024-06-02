import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
* {
	box-sizing: border-box;
	padding: 0;
	margin: 0;
}

body {
  font-family: 'Roboto', sans-serif;
}
`

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<>
			<GlobalStyle />
			<App />
		</>
	</React.StrictMode>
)
