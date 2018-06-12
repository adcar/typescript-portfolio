import * as React from 'react'

import Typography from '@material-ui/core/Typography'
import EducationIcon from '@material-ui/icons/School'
import ExperienceIcon from '@material-ui/icons/Layers'
import SkillsIcon from '@material-ui/icons/Whatshot'
import injectSheet from 'react-jss'
import PageLabel from '../components/PageLabel'

interface IProps {
	classes: any
}
const styles = theme => ({
	icon: {
		height: 40,
		width: 40
	},
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
				<SkillsIcon className={classes.icon} /> Skills
			</Typography>
			<Typography variant="display2" component="h2">
				<ExperienceIcon className={classes.icon} /> Experience
			</Typography>
			<Typography variant="display2" component="h2">
				<EducationIcon className={classes.icon} /> Education
			</Typography>
		</div>
	</div>
)

export default injectSheet(styles)(Resume)
