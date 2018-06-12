import * as React from 'react'
import injectSheet from 'react-jss'
import Quote from './Quote'

const styles = theme => ({
	content: {
		lineHeight: '1.5em',
		margin: '0 auto',
		maxWidth: 800,
		padding: '2em 2em'
	},
	image: {
		filter: 'opacity(0.25)',
		maxHeight: 500,
		objectFit: 'cover',
		width: '100%'
	},
	root: {
		color: 'white'
	}
})

interface IProps {
	classes: any
	content: any
	image: string
	quote: string
}
const Project: React.SFC<IProps> = ({ classes, content, image, quote }) => (
	<div className={classes.root}>
		<img src={image} className={classes.image} alt="Header Image" />
		<div className={classes.content}>
			<Quote text={quote} />
			{content}
		</div>
	</div>
)

export default injectSheet(styles)(Project)
