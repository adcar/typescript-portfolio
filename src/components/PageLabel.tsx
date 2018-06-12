import * as React from 'react'

import Typography from '@material-ui/core/Typography'
import injectSheet from 'react-jss'

const styles = theme => ({
	root: {
		backgroundColor: theme.main,
		color: 'white',
		height: 200,
		marginTop: 70,

		alignItems: 'center',
		display: 'flex',
		justifyContent: 'center'
	}
})
interface IProps {
	classes: any
	title: string
}

class PageLabel extends React.Component<IProps> {
	public render() {
		const { classes, title } = this.props

		return (
			<div className={classes.root}>
				<Typography
					variant="display3"
					color="inherit"
					align="center"
					component="h1"
				>
					{title}
				</Typography>
			</div>
		)
	}
}

export default injectSheet(styles)(PageLabel)
