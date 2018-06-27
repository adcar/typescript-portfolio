import * as React from 'react'

import Typography from '@material-ui/core/Typography'
import injectSheet from 'react-jss'

const styles = theme => ({
	icon: {
		padding: 20
	},
	root: {
		alignItems: 'center',
		backgroundColor: theme.main,
		boxShadow: theme.shadow,
		display: 'flex',
		justifyContent: 'flex-start'
	}
})
interface IProps {
	classes: any
	desc: string
	icon: any
	title: string
}
const Award: React.SFC<IProps> = ({ classes, icon, title, desc }) => (
	<div className={classes.root}>
		<div className={classes.icon}>{icon}</div>
		<div>
			<Typography variant="title" gutterBottom={true} color="inherit">
				{title}
			</Typography>
			<Typography color="inherit">{desc}</Typography>
		</div>
	</div>
)

export default injectSheet(styles)(Award)
