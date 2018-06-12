import * as React from 'react'

import { withRouter } from 'react-router-dom'

interface IProps {
	children: any
	location: any
}

class AppWrapper extends React.Component<IProps> {
	public componentDidUpdate(prevProps) {
		if (this.props.location !== prevProps.location) {
			window.scrollTo(0, 0)
		}
	}
	public render() {
		return this.props.children
	}
}

export default withRouter(AppWrapper)
