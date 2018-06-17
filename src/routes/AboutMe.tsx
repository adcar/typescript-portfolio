import * as React from 'react'

import Typography from '@material-ui/core/Typography'
import injectSheet from 'react-jss'
import PageLabel from '../components/PageLabel'

import ProfilePhoto from '../img/profilePhoto.jpg'

interface IProps {
	classes: any
}

const styles = theme => ({
	image: {
		borderRadius: '50%',
		float: 'left',
		paddingRight: '1em',
		shapeOutside: 'circle(50%)'
	},
	link: {
		'&:hover': {
			textDecoration: 'underline'
		},
		color: theme.main,
		textDecoration: 'none'
	},
	root: {
		backgroundColor: 'red'
	},
	section: {
		clear: 'left',
		paddingTop: '50px'
	},
	wrapper: {
		color: 'white',
		margin: '0 auto',
		maxWidth: 800,
		padding: '50px 32px'
	}
})

const AboutMe: React.SFC<IProps> = ({ classes }) => (
	<div>
		<PageLabel title="About Me" />
		<div className={classes.wrapper}>
			<div>
				<img className={classes.image} src={ProfilePhoto} alt="Profile Photo" />
				<Typography variant="display1" color="inherit">
					Introduction
				</Typography>
				<Typography>
					Hi, I'm Alexander Cardosi, a web developer from Colchester, Vermont. I
					have for front end design and development and love learning new
					technologies and helping the open source community any way I can.
					React, Redux, and Typescript are some of my favorite technolgies and
					love to implement them in any of my projects (Including this
					website!). Also, I love penguins.
				</Typography>
			</div>

			<div className={classes.section}>
				<Typography variant="display1" color="inherit">
					Interests
				</Typography>
				<Typography>
					I love creating small projects on my free time, and learning cool new
					technologies. GNU / Linux is my preferred operating system, and I
					often find myself tinkering with it and figuring out new and more
					efficient ways to operate my machine. Outside of my computer science,
					I enjoy playing a variety of video games and hanging out with friends
					or family.
				</Typography>
			</div>
			<div className={classes.section}>
				<Typography variant="display1" color="inherit">
					Credits
				</Typography>
				<Typography>
					This website was created with{' '}
					<a href="https://reactjs.org" className={classes.link}>
						React
					</a>,{' '}
					<a href="https://material-ui.com/" className={classes.link}>
						Material-UI
					</a>, and{' '}
					<a href="https://www.typescriptlang.org/" className={classes.link}>
						Typescript
					</a>.
				</Typography>
				<Typography>
					Icons are provided by{' '}
					<a href="https://material.io/tools/icons/" className={classes.link}>
						Material Icons
					</a>{' '}
					and{' '}
					<a href="https://www.freepik.com" className={classes.link}>
						FreePik
					</a>
					Header Photo by{' '}
					<a href="https://unsplash.com/@laurenmancke" className={classes.link}>
						Lauren Mancke
					</a>{' '}
					on{' '}
					<a href="https://unsplash.com/" className={classes.link}>
						Unsplash
					</a>.
				</Typography>
			</div>
		</div>
	</div>
)

export default injectSheet(styles)(AboutMe)
