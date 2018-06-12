import * as React from 'react'

import Typography from '@material-ui/core/Typography'
import injectSheet from 'react-jss'
import PageLabel from '../components/PageLabel'

interface IProps {
	classes: any
}
const styles = theme => ({
	info: {
		backgroundColor: 'green',
		gridRow: '1 / end'
	},
	logo: {
		borderRadius: '50%',
		margin: '0 auto'
	},
	logoWrapper: {},
	wrapper: {
		margin: '0 auto',
		maxWidth: 800
	}
})

const Resume: React.SFC<IProps> = ({ classes }) => (
	<div>
		<PageLabel title="Resume" />
		<div className={classes.wrapper}>
			<Typography variant="display2" component="h2">
				Skills
			</Typography>
			<Typography variant="display2" component="h2">
				Experience
			</Typography>
			<Typography variant="display2" component="h2">
				Education
			</Typography>
		</div>
	</div>
)

export default injectSheet(styles)(Resume)
