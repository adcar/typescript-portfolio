import * as React from 'react'

import { Timeline, TimelineEvent } from 'react-event-timeline'
import injectSheet from 'react-jss'

interface IProps {
	classes: any
}

const styles = theme => ({
	root: {
		padding: '50px 0'
	}
})

const custom = {
	bubble: {
		alignItems: 'center',
		backgroundColor: '#eb3b5a',
		border: 'none',
		display: 'flex',
		height: 50,
		justifyContent: 'center',
		left: -10,
		width: 50
	},
	content: {
		backgroundColor: '#eb3b5a',
		boxShadow: '0'
	},
	subtitle: {
		color: 'white',
		marginLeft: 10
	},
	title: {
		color: 'white',
		marginLeft: 7
	}
}

const EducationTimeline: React.SFC<IProps> = ({ classes }) => (
	<div className={classes.root}>
		<Timeline style={{ fontSize: '18px' }}>
			<TimelineEvent
				titleStyle={custom.title}
				subtitleStyle={custom.subtitle}
				icon={<p>P</p>}
				bubbleStyle={custom.bubble}
				contentStyle={custom.content}
				title="Pre-Tech 2"
				subtitle="2015-2016"
			>
				I was in this program for one year which prepared me for my upcoming
				technical program.
			</TimelineEvent>
			<TimelineEvent
				titleStyle={custom.title}
				subtitleStyle={custom.subtitle}
				icon={<p>C</p>}
				bubbleStyle={custom.bubble}
				contentStyle={custom.content}
				title="Computer Animation and Web Design"
				subtitle="2016-2018"
			>
				After attending this program for two years, I learned the fundementals
				of web design and front end development.
			</TimelineEvent>
			<TimelineEvent
				title="Vermont Technical College"
				subtitle="2018-Now"
				icon={<p>V</p>}
				titleStyle={custom.title}
				subtitleStyle={custom.subtitle}
				bubbleStyle={custom.bubble}
				contentStyle={custom.content}
			>
				I'll be attending VTC this year!
			</TimelineEvent>
		</Timeline>
	</div>
)

export default injectSheet(styles)(EducationTimeline)
