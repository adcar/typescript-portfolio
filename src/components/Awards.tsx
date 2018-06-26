import * as React from 'react'

import Typography from '@material-ui/core/Typography'
import injectSheet from 'react-jss'
import NTHS from '../icons/NTHS'
import SkillsStates from '../icons/SkillsStates'
import SkillsUSA from '../icons/SkillsUSA'

interface IProps {
	classes: any
}
const styles = theme => ({
	icon: {
		color: theme.main
	},
	item: {
		padding: '10px 0'
	},
	root: {
		padding: '30px 20px'
	}
})

const Awards: React.SFC<IProps> = ({ classes }) => (
	<div className={classes.root}>
		<div className={classes.item}>
			<Typography variant="title" gutterBottom={true}>
				<SkillsStates viewBox="0 0 181.594 181.593" /> SkillsUSA Nationals
			</Typography>
			<Typography>
				Competed in the national SkillsUSA Web Design competition, placing
				first.
			</Typography>
		</div>
		<div className={classes.item}>
			<Typography variant="title" gutterBottom={true}>
				<SkillsUSA viewBox="0 0 493.584 493.584" /> SkillsUSA States
			</Typography>
			<Typography>
				Competed in the state-wide SkillsUSA Web Design competition, placing
				first.
			</Typography>
		</div>
		<div className={classes.item}>
			<Typography variant="title" gutterBottom={true}>
				<NTHS viewBox="0 0 31.771 31.771" /> National Technical Honor Society
			</Typography>
			<Typography>
				Became a National Technical Honor Society student while attending the
				Computer Animation and Web Design program.
			</Typography>
		</div>
	</div>
)

export default injectSheet(styles)(Awards)
