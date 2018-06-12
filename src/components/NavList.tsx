import Collapse from '@material-ui/core/Collapse'
import * as React from 'react'

import AssignmentIcon from '@material-ui/icons/Assignment'
import BuildIcon from '@material-ui/icons/Build'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import HomeIcon from '@material-ui/icons/Home'
import InfoIcon from '@material-ui/icons/Info'
import MusicNoteIcon from '@material-ui/icons/MusicNote'
import ViewQuiltIcon from '@material-ui/icons/ViewQuilt'
import WebIcon from '@material-ui/icons/Web'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import injectSheet from 'react-jss'
import { Link } from 'react-router-dom'

import ListItemText from '@material-ui/core/ListItemText'
import ListSubheader from '@material-ui/core/ListSubheader'

const styles = theme => ({
	item: {
		padding: 0,

		height: '100%',
		width: '100%'
	},
	link: {
		height: '100%',
		width: '100%',

		display: 'inline-flex',
		textDecoration: 'none',

		paddingBottom: 12,
		paddingLeft: 24,
		paddingRight: 24,
		paddingTop: 12
	},

	nested: {
		paddingLeft: 50
	},

	root: {
		maxWidth: 360,
		width: '100%',

		backgroundColor: 'transparent'
	}
})
interface IProps {
	classes: any
	close: any
}
interface IState {
	open: boolean
}
class NestedList extends React.Component<IProps, IState> {
	public state = { open: false }

	public handleClick = () => {
		this.setState({ open: !this.state.open })
	}
	public handleClose = () => {
		this.props.close()
	}

	public render() {
		const { classes } = this.props

		return (
			<div className={classes.root}>
				<List
					component="nav"
					subheader={
						<ListSubheader component="div">Alexander Cardosi</ListSubheader>
					}
				>
					<ListItem button={true} className={classes.item}>
						<Link className={classes.link} to="/" onClick={this.handleClose}>
							<ListItemIcon>
								<HomeIcon />
							</ListItemIcon>
							<ListItemText inset={true} primary="Home" />
						</Link>
					</ListItem>
					<ListItem button={true} onClick={this.handleClick}>
						<ListItemIcon>
							<AssignmentIcon />
						</ListItemIcon>
						<ListItemText inset={true} primary="Projects" />
						{this.state.open ? <ExpandLess /> : <ExpandMore />}
					</ListItem>
					<Collapse in={this.state.open} timeout="auto" unmountOnExit={true}>
						<List component="div">
							<ListItem button={true} className={classes.item}>
								<Link
									className={[classes.link, classes.nested].join(' ')}
									to="/projects/upright-builders"
									onClick={this.handleClose}
								>
									<ListItemIcon>
										<BuildIcon />
									</ListItemIcon>
									<ListItemText inset={true} primary="Upright Builders" />
								</Link>
							</ListItem>
							<ListItem button={true} className={classes.item}>
								<Link
									className={[classes.link, classes.nested].join(' ')}
									to="/projects/euterpe"
									onClick={this.handleClose}
								>
									<ListItemIcon>
										<MusicNoteIcon />
									</ListItemIcon>
									<ListItemText inset={true} primary="Euterpe" />
								</Link>
							</ListItem>

							<ListItem button={true} className={classes.item}>
								<Link
									className={[classes.link, classes.nested].join(' ')}
									to="/test"
									onClick={this.handleClose}
								>
									<ListItemIcon>
										<WebIcon />
									</ListItemIcon>
									<ListItemText inset={true} primary="Portfolio" />
								</Link>
							</ListItem>
						</List>
					</Collapse>
					<ListItem button={true} className={classes.item}>
						<Link
							className={classes.link}
							to="/resume"
							onClick={this.handleClose}
						>
							<ListItemIcon>
								<ViewQuiltIcon />
							</ListItemIcon>
							<ListItemText inset={true} primary="Resume" />
						</Link>
					</ListItem>
					<ListItem button={true} className={classes.item}>
						<Link
							className={classes.link}
							to="/test"
							onClick={this.handleClose}
						>
							<ListItemIcon>
								<InfoIcon />
							</ListItemIcon>
							<ListItemText inset={true} primary="About Me" />
						</Link>
					</ListItem>
				</List>
			</div>
		)
	}
}

export default injectSheet(styles)(NestedList)
