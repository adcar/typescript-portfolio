import * as React from 'react'

import Typography from '@material-ui/core/Typography'
import injectSheet from 'react-jss'
import PageLabel from '../components/PageLabel'

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
	wrapper: {
		margin: '0 auto',
		maxWidth: 1000,
		padding: 32
	}
})
interface IProps {
	classes: any
}
const Projects: React.SFC<IProps> = ({ classes }) => (
	<div>
		<PageLabel title="Projects" />
		<div className={classes.wrapper}>
			<div className={classes.projects}>
				<div className={classes.project}>
					<img
						src="https://via.placeholder.com/200x200"
						className={classes.img}
					/>
					<div className={classes.desc}>
						<Typography variant="display1" gutterBottom={true} color="inherit">
							Upright Builders
						</Typography>
						<Typography>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Vestibulum feugiat nulla vitae ante laoreet mattis. Cras blandit
							libero a finibus consequat. Proin porta fringilla est non
							ullamcorper. Aenean sed fringilla mauris. Duis in tincidunt elit.
							Quisque efficitur sapien eros. Sed sed ultrices justo, id
							pellentesque enim.
						</Typography>
					</div>
				</div>
				<div className={classes.project}>
					<img
						src="https://via.placeholder.com/200x200"
						className={classes.img}
					/>
					<div className={classes.desc}>
						<Typography variant="display1" gutterBottom={true} color="inherit">
							Euterpe
						</Typography>
						<Typography>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Vestibulum feugiat nulla vitae ante laoreet mattis. Cras blandit
							libero a finibus consequat. Proin porta fringilla est non
							ullamcorper. Aenean sed fringilla mauris. Duis in tincidunt elit.
							Quisque efficitur sapien eros. Sed sed ultrices justo, id
							pellentesque enim.
						</Typography>
					</div>
				</div>
				<div className={classes.project}>
					<img
						src="https://via.placeholder.com/200x200"
						className={classes.img}
					/>
					<div className={classes.desc}>
						<Typography variant="display1" gutterBottom={true} color="inherit">
							Portfolio
						</Typography>
						<Typography>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Vestibulum feugiat nulla vitae ante laoreet mattis. Cras blandit
							libero a finibus consequat. Proin porta fringilla est non
							ullamcorper. Aenean sed fringilla mauris. Duis in tincidunt elit.
							Quisque efficitur sapien eros. Sed sed ultrices justo, id
							pellentesque enim.
						</Typography>
					</div>
				</div>
			</div>
		</div>
	</div>
)
export default injectSheet(styles)(Projects)
