import Typography from '@material-ui/core/Typography'
import * as React from 'react'
import { scaleRotate as Menu } from 'react-burger-menu'
import injectSheet from 'react-jss'
import BurgerIcon from '../components/BurgerIcon'
import NavList from '../components/NavList'

const bmStyles = {
	bmBurgerBars: {},
	bmBurgerButton: {
		position: 'relative',

		height: '36px',
		width: '36px',
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
		background: '#2c3e50',
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
		fill: '#373a47'
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
	navbar: {
		alignItems: 'center',
		backgroundColor: theme.main,
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
			<div className={classes.navbar}>
				<Menu
					styles={bmStyles}
					customBurgerIcon={<BurgerIcon />}
					pageWrapId={'page-wrap'}
					outerContainerId={'outer-container'}
					isOpen={isOpen}
				>
					<NavList close={this.close} />
				</Menu>
				<Typography variant="headline">Alexander Cardosi</Typography>
			</div>
		)
	}
}
export default injectSheet(styles)(Navbar)
