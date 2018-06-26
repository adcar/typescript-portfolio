import * as React from 'react'

import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import injectSheet from 'react-jss'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Logo from '../img/logo.svg'

interface IProps {
	classes: any
}
const styles = theme => ({
	aboutBtn: {
		'&:hover': {
			backgroundColor: theme.secondary,
			color: 'white'
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
		[theme.breaks.md]: {
			height: 280,
			width: 280
		},
		height: 200,
		marginBottom: 20,
		width: 200
	},
	resumeBtn: {
		'&:hover': {
			backgroundColor: theme.secondary
		},
		backgroundColor: theme.main,
		color: 'white',
		marginRight: theme.spacing.unit
	},
	subtitle: {
		[theme.breaks.md]: {
			fontSize: 34
		},
		fontSize: 20,
		marginTop: 0
	},
	title: {
		[theme.breaks.md]: {
			fontSize: 56
		},
		fontSize: 30
	},
	wrapper: {
		alignItems: 'center',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center'
	}
})

const Home: React.SFC<IProps> = ({ classes }) => (
	<div>
		<Header>
			<div className={classes.wrapper}>
				<img src={Logo} className={classes.logo} />
				<Typography
					className={classes.title}
					component="h1"
					variant="display3"
					align="center"
				>
					Alexander Cardosi
				</Typography>
				<Typography
					variant="display1"
					component="span"
					align="center"
					className={classes.subtitle}
				>
					Web Developer
				</Typography>
				<div className={classes.buttons}>
					<Link to="/resume" className={classes.link}>
						<Button variant="contained" className={classes.resumeBtn}>
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

export default injectSheet(styles)(Home)
