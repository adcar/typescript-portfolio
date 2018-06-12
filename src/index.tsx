import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import registerServiceWorker from './registerServiceWorker'

import hexToRgba from 'hex-rgba'
import { ThemeProvider } from 'react-jss'

const theme = {
	bg: '#4b6584',
	bgTrans: '',
	breaks: {
		md: '@media (min-width: 720px)'
	},
	main: '#2d98da',
	secondary: '#eb3b5a',
	spacing: {
		unit: 20
	}
}

theme.bgTrans = hexToRgba(theme.bg, 95)
const Root = () => (
	<ThemeProvider theme={theme}>
		<App />
	</ThemeProvider>
)

ReactDOM.render(<Root />, document.getElementById('root') as HTMLElement)
registerServiceWorker()
