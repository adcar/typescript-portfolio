import * as React from 'react'

import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import amber from '@material-ui/core/colors/amber'
import blue from '@material-ui/core/colors/blue'
import Home from './routes/Home'

import injectSheet from 'react-jss'

import Footer from './components/Footer'
import Navbar from './components/Navbar'

const theme = createMuiTheme({
	palette: {
		background: {
			default: 'white'
		},
		primary: blue,
		secondary: amber,
		type: 'dark'
	}
})

const styles = () => ({
	bg: {
		backgroundColor: '#fc5c65',
		minHeight: '100%'
	}
})
interface IProps {
	classes: any
}
class App extends React.Component<IProps> {
	public render() {
		const { classes } = this.props
		return (
			<div className={classes.bg}>
				<MuiThemeProvider theme={theme}>
					<Router>
						<div>
							<Navbar />
							<div id="outer-container">
								<div id="page-wrap">
									<Route path="/" exact={true} component={Home} />
									<Footer />
								</div>
							</div>
						</div>
					</Router>
				</MuiThemeProvider>
			</div>
		)
	}
}

export default injectSheet(styles)(App)
