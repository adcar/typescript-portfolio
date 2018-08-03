import * as React from 'react'

import injectSheet from 'react-jss'
import NTHS from '../icons/NTHS'
import SkillsStates from '../icons/SkillsStates'
import SkillsUSA from '../icons/SkillsUSA'

import Award from './Award'

interface IProps {
	classes: any
}
const styles = theme => ({
	icon: {
		color: theme.main
	},
	item: {
		padding: '15px 0'
	},
	root: {
		padding: '30px 20px'
	}
})

const Awards: React.SFC<IProps> = ({ classes }) => (
	<div className={classes.root}>
		<div className={classes.item}>
			<Award
				icon={<SkillsStates viewBox="0 0 181.594 181.593" />}
				title="SkillsUSA Nationals"
				desc="Competed in the national SkillsUSA Web Design competition, placing
				first."
			/>
		</div>
		<div className={classes.item}>
			<Award
				icon={<SkillsUSA viewBox="0 0 493.584 493.584" />}
				title="SkillsUSA States"
				desc="Competed in the state-wide SkillsUSA Web Design competition, placing
				first."
			/>
		</div>
		<div className={classes.item}>
			<Award
				icon={<NTHS viewBox="0 0 31.771 31.771" />}
				title="	 National Technical Honor Society"
				desc="Became a National Technical Honor Society student while attending the
				Computer Animation and Web Design program."
			/>
		</div>
	</div>
)

export default injectSheet(styles)(Awards)
