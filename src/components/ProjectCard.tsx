import * as React from 'react'

import Typography from '@material-ui/core/Typography'

import ReactCardFlip from 'react-card-flip'
import injectSheet from 'react-jss'

const styles = theme => ({
	back: {
		backgroundColor: theme.main,
		height: 200,
		padding: 30
	},
	projectImage: {
		width: '100%'
	},
	root: {
		color: 'white',
		cursor: 'pointer',
		maxWidth: 400,
		minHeight: 270
	},
	title: {
		backgroundColor: theme.main,
		padding: '15px 0'
	}
})
interface IProps {
	classes: any
	image: string
	title: string
	content: string
}
interface IState {
	isFlipped: boolean
}

class ProjectCard extends React.Component<IProps, IState> {
	constructor(props) {
		super(props)
		this.state = {
			isFlipped: false
		}
		this.handleClick = this.handleClick.bind(this)
	}

	public handleClick(e) {
		e.preventDefault()
		this.setState({ isFlipped: !this.state.isFlipped })
	}

	public render() {
		const { classes, title, image, content } = this.props
		return (
			<div className={classes.root} onClick={this.handleClick}>
				<Typography
					variant="display1"
					color="inherit"
					align="center"
					className={classes.title}
				>
					{title}
				</Typography>
				<ReactCardFlip isFlipped={this.state.isFlipped}>
					<h1>hi</h1>
					<img
						src={image}
						alt="Project Image"
						key="front"
						className={classes.projectImage}
					/>
					<div className={classes.back} key="back">
						{content}
					</div>
				</ReactCardFlip>
			</div>
		)
	}
}
export default injectSheet(styles)(ProjectCard)
