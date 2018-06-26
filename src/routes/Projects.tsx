import * as React from 'react'

import Typography from '@material-ui/core/Typography'
import injectSheet from 'react-jss'
import PageLabel from '../components/PageLabel'
import ProjectCard from '../components/ProjectCard'

const styles = theme => ({
	desc: {
		padding: 30
	},
	img: {
		width: '100%'
	},
	project: {
		'&:nth-of-type(even)': {
			[theme.breaks.sm]: {
				flexDirection: 'row-reverse'
			}
		},
		[theme.breaks.sm]: {
			flexDirection: 'row'
		},
		alignItems: 'flex-start',
		backgroundColor: theme.main,
		color: 'white',
		display: 'flex',
		flexDirection: 'column',
		marginBottom: 20,
		marginTop: 20
	},
	projects: {
		display: 'flex',
		flexDirection: 'column'
	},
	title: {
		color: 'white',
		marginTop: 30
	},
	wrapper: {
		margin: '0 auto',
		maxWidth: 1000,
		padding: '32px 0',

		display: 'grid',
		gridGap: '30px',
		gridTemplateColumns: 'repeat(auto-fill, 280px)',
		[theme.breaks.xs]: {
			gridTemplateColumns: 'repeat(auto-fill, 400px)'
		},
		justifyContent: 'center'
	}
})
interface IProps {
	classes: any
}
const Projects: React.SFC<IProps> = ({ classes }) => (
	<div>
		<PageLabel title="Projects" />
		<Typography variant="display1" align="center" className={classes.title}>
			Click on Any Project!
		</Typography>
		<div className={classes.wrapper}>
			<ProjectCard
				image={'https://via.placeholder.com/400x200'}
				title="Upright Builders"
				content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean rhoncus magna vel massa luctus tincidunt."
			/>
			<ProjectCard
				image={'https://via.placeholder.com/400x200'}
				title="Euterpe"
				content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean rhoncus magna vel massa luctus tincidunt."
			/>
			<ProjectCard
				image={'https://via.placeholder.com/400x200'}
				title="Portfolio"
				content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean rhoncus magna vel massa luctus tincidunt."
			/>
		</div>
	</div>
)
export default injectSheet(styles)(Projects)
