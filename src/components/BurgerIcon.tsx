import * as React from 'react'
import injectSheet from 'react-jss'
const styles = (theme: any) => ({
	line: {
		'&:nth-of-type(1)': {
			width: 40
		},
		'&:nth-of-type(2)': {
			width: 30
		},
		'&:nth-of-type(3)': {
			width: 40
		},
		backgroundColor: 'white',
		borderRadius: 7,
		height: 7,
		marginBottom: 6,
		transition: 'all 0.25s ease-out'
	}
})
interface IProps {
	classes: any
}
class BurgerIcon extends React.Component<IProps> {
	constructor(props) {
		super(props)
	}

	public render() {
		const { classes } = this.props
		return (
			<div className={classes.root}>
				<div className={classes.line} />
				<div className={classes.line} />
				<div className={classes.line} />
			</div>
		)
	}
}

export default injectSheet(styles)(BurgerIcon)
