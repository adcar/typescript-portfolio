import * as React from 'react'
import injectSheet from 'react-jss'
const styles = theme => ({
	root: {
		alignItems: 'center',
		backgroundColor: theme.bg,
		color: 'white',
		display: 'flex',
		height: '100vh',
		justifyContent: 'center',
		margin: '0 auto',
		overflow: 'hidden',
		transition:
			'transform 0.5s ease-out, border-radius 1s ease-in, width 0.75s ease-in',
		width: '100%'
	}
})
interface IProps {
	classes: any
	chidlren: any
}
interface IState {
	isLoaded: boolean
}

class Header extends React.Component<IProps, IState> {
	constructor(props) {
		super(props)
		this.state = {
			isLoaded: false
		}
	}
	public componentDidMount() {
		setTimeout(() => {
			this.setState({
				isLoaded: true
			})
		}, 100)
	}
	public render() {
		const { classes, children } = this.props
		const { isLoaded } = this.state
		return (
			<div
				className={classes.root}
				style={{
					borderRadius: isLoaded ? 0 : '50%',
					transform: isLoaded ? 'scale(1)' : 'scale(0)'
				}}
			>
				{children}
			</div>
		)
	}
}

export default injectSheet(styles)(Header)
