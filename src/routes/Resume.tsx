import * as React from 'react'

import Typography from '@material-ui/core/Typography'

import ExperienceIcon from '@material-ui/icons/Layers'
import EducationIcon from '@material-ui/icons/School'
import AwardsIcon from '@material-ui/icons/Star'
import SkillsIcon from '@material-ui/icons/Whatshot'
import injectSheet from 'react-jss'

import EducationTimeline from '../components/EducationTimeline'
import PageLabel from '../components/PageLabel'
import Skills from '../components/Skills'
import Works from '../components/Works'
interface IProps {
	classes: any
}
const styles = theme => ({
	icon: {
		color: theme.main,
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
	progressRoot: {
		height: 20
	},
	wrapper: {
		color: 'white',
		margin: '0 auto',
		maxWidth: 800,
		padding: 32
	}
})

const Resume: React.SFC<IProps> = ({ classes }) => (
	<div>
		<PageLabel title="Resume" />
		<div className={classes.wrapper}>
			<Typography variant="display2" component="h2" color="inherit">
				<SkillsIcon className={classes.icon} /> Skills
			</Typography>
			<Skills />

			<Typography variant="display2" component="h2" color="inherit">
				<ExperienceIcon className={classes.icon} /> Experience
			</Typography>
			<Works />

			<Typography variant="display2" component="h2" color="inherit">
				<EducationIcon className={classes.icon} /> Education
			</Typography>
			<EducationTimeline />

			<Typography variant="display2" component="h2" color="inherit">
				<AwardsIcon className={classes.icon} /> Awards
			</Typography>
		</div>
	</div>
)

export default injectSheet(styles)(Resume)
