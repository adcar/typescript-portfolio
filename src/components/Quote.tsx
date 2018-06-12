import * as React from 'react'

import injectSheet from 'react-jss'

interface IProps {
	text: string
	classes: any
}
const styles = theme => ({
	root: {
		display: 'block',
		fontSize: 30,
		fontStyle: 'italic',
		lineHeight: '1.3em',
		margin: '80px auto',
		textAlign: 'center'
	}
})
const Quote: React.SFC<IProps> = ({ text, classes }) => (
	<q className={classes.root}>{text}</q>
)

export default injectSheet(styles)(Quote)
