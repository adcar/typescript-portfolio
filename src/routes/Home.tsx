import * as React from 'react'

import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import injectSheet from 'react-jss'
import { Link } from 'react-router-dom'
import Header from '../components/Header'

interface IProps {
	classes: any
}
const styles = theme => ({
	aboutBtn: {
		'&:hover': {
			backgroundColor: '#d1d8e0'
		},
		backgroundColor: 'white',
		color: 'black',
		marginLeft: theme.spacing.unit
	},

	buttons: {
		alignItems: 'center',
		display: 'flex',
		justifyContent: 'center',
		marginTop: theme.spacing.unit * 2.5
	},
	link: {
		textDecoration: 'none'
	},
	logo: {
		borderRadius: '50%',
		marginBottom: 20
	},
	resumeBtn: {
		'&:hover': {
			backgroundColor: '#eb3b5a'
		},
		backgroundColor: theme.main,
		marginRight: theme.spacing.unit
	},

	wrapper: {
		alignItems: 'center',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center'
	}
})
class Home extends React.Component<IProps> {
	public render() {
		const { classes } = this.props
		return (
			<div>
				<Header>
					<div className={classes.wrapper}>
						<img
							src="https://via.placeholder.com/280x280"
							className={classes.logo}
						/>
						<Typography
							component="h1"
							variant="display3"
							color="inherit"
							align="center"
						>
							Alexander Cardosi
						</Typography>
						<Typography variant="display1" component="span" align="center">
							Web Developer
						</Typography>
						<div className={classes.buttons}>
							<Link to="/resume" className={classes.link}>
								<Button
									variant="contained"
									color="primary"
									className={classes.resumeBtn}
								>
									Resume
								</Button>
							</Link>

							<Link to="/about-me" className={classes.link}>
								<Button
									variant="contained"
									color="primary"
									className={classes.aboutBtn}
								>
									About
								</Button>
							</Link>
						</div>
					</div>
				</Header>
			</div>
		)
	}
}

export default injectSheet(styles)(Home)
