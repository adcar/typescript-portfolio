import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import registerServiceWorker from './registerServiceWorker'

import hexToRgba from 'hex-rgba'
import { ThemeProvider } from 'react-jss'

const theme = {
	bg: '#ffffff',
	bgTrans: '',
	breaks: {
		md: '@media (min-width: 720px)',
		sm: '@media (min-width: 620px)',
		xs: '@media (min-width: 440px)'
	},
	main: '#263238',
	secondary: '#00BCD4',
	shadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
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
