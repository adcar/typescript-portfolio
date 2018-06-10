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
			width: 20
		},
		backgroundColor: 'white',
		borderRadius: 7,
		height: 7,
		marginBottom: 6
	}
})
class BurgerIcon extends React.Component<any, any> {
	public render() {
		const { classes } = this.props
		return (
			<div>
				<div className={classes.line} />
				<div className={classes.line} />
				<div className={classes.line} />
			</div>
		)
	}
}

export default injectSheet(styles)(BurgerIcon)
