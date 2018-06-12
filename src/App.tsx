import * as React from 'react'

import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import amber from '@material-ui/core/colors/amber'
import blue from '@material-ui/core/colors/blue'

import Home from './routes/Home'
import Euterpe from './routes/projects/Euterpe'
import UprightBuilders from './routes/projects/UprightBuilders'

import injectSheet from 'react-jss'

import Footer from './components/Footer'
import Navbar from './components/Navbar'

import AppWrapper from './AppWrapper'

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

const styles = jssTheme => ({
	bg: {
		backgroundColor: jssTheme.bg,
		minHeight: '100%'
	},
	wrap: {
		minHeight: '100vh'
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
						<AppWrapper>
							<div>
								<Navbar />
								<div id="outer-container">
									<div id="page-wrap">
										<div className={classes.wrap}>
											<Route path="/" exact={true} component={Home} />
											<Route
												path="/projects/upright-builders"
												component={UprightBuilders}
											/>
											<Route path="/projects/euterpe" component={Euterpe} />
										</div>
										<Footer />
									</div>
								</div>
							</div>
						</AppWrapper>
					</Router>
				</MuiThemeProvider>
			</div>
		)
	}
}

export default injectSheet(styles)(App)
