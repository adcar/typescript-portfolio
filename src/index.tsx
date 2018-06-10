import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import registerServiceWorker from './registerServiceWorker'

import { ThemeProvider } from 'react-jss'
const theme = {
	bg: '#4b6584',
	breakpoints: {
		md: '@media (min-width: 720px)'
	},
	main: '#fc5c65',
	spacing: {
		unit: 20
	}
}
const Root = () => (
	<ThemeProvider theme={theme}>
		<App />
	</ThemeProvider>
)

ReactDOM.render(<Root />, document.getElementById('root') as HTMLElement)
registerServiceWorker()
