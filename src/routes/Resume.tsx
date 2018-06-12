import * as React from 'react'

import injectSheet from 'react-jss'
import PageLabel from '../components/PageLabel'
import ProfilePhoto from '../img/profilePhoto.jpg'

interface IProps {
	classes: any
}
const styles = theme => ({
	wrapper: {
		display: 'grid',
		gridTemplateColumns: '1fr 2fr',
		gridTemplateRows: '1fr 1fr 1fr 1fr',
		margin: '0 auto',
		maxWidth: 800
	}
})

const Resume: React.SFC<IProps> = ({ classes }) => (
	<div>
		<PageLabel title="Resume" />
		<div className={classes.wrapper}>
			<div>
				<img src={ProfilePhoto} alt="Profile Photo" />

				<h1>Alexander Cardosi</h1>
				<h2>Web Developer</h2>
			</div>
		</div>
	</div>
)

export default injectSheet(styles)(Resume)
