import * as React from 'react'

import Typography from '@material-ui/core/Typography'
import MenuIcon from '@material-ui/icons/Menu'
import { scaleDown as Menu } from 'react-burger-menu'
import injectSheet from 'react-jss'
import { Link } from 'react-router-dom'
import NavList from '../components/NavList'

const bmStyles = {
	bmBurgerBars: {},
	bmBurgerButton: {
		position: 'relative',

		height: '48px',
		width: '48px',
		zIndex: '1'
	},
	bmCross: {
		background: 'white'
	},
	bmCrossButton: {
		height: '36px',
		width: '36px'
	},
	bmItemList: {
		color: 'white'
	},
	bmMenu: {
		background: '#263238',
		fontSize: '1.15em',

		zIndex: '2'
	},
	bmMenuWrap: {
		position: 'fixed',
		zIndex: '2',

		height: '100vh',
		width: 300,

		left: '0px',
		top: '0px'
	},

	bmMorphShape: {
		fill: '#263238'
	},

	bmItem: {
		display: 'inline-block'
	},
	bmOverlay: {
		background: 'rgba(0, 0, 0, 0.3)',
		position: 'fixed',
		zIndex: '0',

		left: '0px',
		top: '0px',
		width: '100vw'
	}
}
const styles = (theme: any) => ({
	link: {
		'&:hover': {
			textDecoration: 'underline'
		},
		color: 'inherit',
		textDecoration: 'none'
	},
	navbar: {
		alignItems: 'center',
		backgroundColor: theme.main,
		boxShadow: theme.shadow,
		color: 'white',
		display: 'flex',
		height: 70,
		justifyContent: 'space-between',
		left: 0,
		paddingLeft: '10vw',
		paddingRight: '10vw',
		position: 'fixed',
		top: 0,
		width: '100%',
		zIndex: '2'
	}
})
interface IProps {
	classes: any
	theme: any
}
interface IState {
	isOpen: boolean
}

class Navbar extends React.Component<IProps, IState> {
	public state = {
		isOpen: false
	}
	public close = () => {
		this.setState({
			isOpen: false
		})
	}
	public render() {
		const { classes } = this.props
		const { isOpen } = this.state
		return (
			<nav className={classes.navbar} id="nav">
				<Menu
					styles={bmStyles}
					customBurgerIcon={<MenuIcon viewBox="0 0 24 24" />}
					pageWrapId={'page-wrap'}
					outerContainerId={'outer-container'}
					isOpen={isOpen}
				>
					<NavList close={this.close} />
				</Menu>
				<Typography variant="headline" color="inherit">
					<Link to="/" className={classes.link}>
						Alexander Cardosi
					</Link>
				</Typography>
			</nav>
		)
	}
}
export default injectSheet(styles)(Navbar)
