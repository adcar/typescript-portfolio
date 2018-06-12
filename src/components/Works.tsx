import * as React from 'react'

import Typography from '@material-ui/core/Typography'
import injectSheet from 'react-jss'

interface IProps {
	classes: any
}
const styles = theme => ({
	preview: {
		paddingRight: 30
	},
	root: {
		padding: '50px 0'
	},
	section: {
		alignItems: 'center',
		display: 'flex'
	}
})

const Works: React.SFC<IProps> = ({ classes }) => (
	<div className={classes.root}>
		<div className={classes.section}>
			<img
				src="https://via.placeholder.com/200x200"
				alt="Placeholder"
				className={classes.preview}
			/>
			<div>
				<Typography variant="title" gutterBottom={true}>
					Upright Builders
				</Typography>
				<Typography>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				</Typography>
			</div>
		</div>
		<div className={classes.section}>
			<div>
				<Typography
					variant="title"
					gutterBottom={true}
					style={{ textAlign: 'right' }}
				>
					Euterpe
				</Typography>
				<Typography style={{ textAlign: 'right' }}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac
					tellus mollis, vulputate est et, maximus augue.
				</Typography>
			</div>
			<img
				style={{ paddingLeft: 30, paddingRight: 0 }}
				src="https://via.placeholder.com/200x200"
				alt="Placeholder"
				className={classes.preview}
			/>
		</div>
		<div className={classes.section}>
			<img
				src="https://via.placeholder.com/200x200"
				alt="Placeholder"
				className={classes.preview}
			/>
			<div>
				<Typography variant="title" gutterBottom={true}>
					Portfolio
				</Typography>
				<Typography>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac
					tellus mollis, vulputate est et, maximus augue.
				</Typography>
			</div>
		</div>
	</div>
)

export default injectSheet(styles)(Works)
