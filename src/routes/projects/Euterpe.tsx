import * as React from 'react'

import injectSheet from 'react-jss'
import PageLabel from '../../components/PageLabel'
import Project from '../../components/Project'

import headerImg from '../../img/euterpe.webp'
interface IProps {
	classes: any
}
const styles = theme => ({})
const UprightBuilders: React.SFC<IProps> = ({ classes }) => (
	<div>
		<PageLabel title="Euterpe" />
		<Project
			quote="A comfort zone is a beautiful place, but nothing ever grows there."
			image={headerImg}
			content={
				<div>
					<p>
						Music has always been an important part my life, whether it&rsquo;s
						listening to a new hit album or my favorite playlist. Streaming this
						music whenever I want is a necessity. Spotify, Pandora, and Google
						Play Music seemed to be reasonable solutions at first. Upon further
						use I found annoyances in each one. For example, Spotify
						doesn&rsquo;t allow the playing of individual songs. Pandora is even
						worse, only allowing users to listen to related music from artists
						and albums. YouTube appeared to be a reasonable alternative to these
						services, but I soon found that the service did not allow the
						turning off of one&rsquo;s screen when playing a song, nor was there
						any album or playlist support. Desiring something that combined
						these services, without the premium costs, I decided to create my
						own music interface; one that contains functionality similar to
						Spotify but retrieves songs from YouTube. I named it Euterpe, after
						the Greek goddess of music. Runnable on desktop and mobile
						platforms, Euterpe provides an easy-to-use interface for accessing
						your favorite songs, albums, or playlists.
					</p>

					<p>
						In order to build this application, I had a few prerequisites that
						needed to be met. For one, I needed an Application Programming
						Interface (API) to provide me with song names, artists, cover art,
						and other metadata. An API allows for different programs to work
						together and share information, exactly what was needed from Spotify
						and Youtube. The decision to consume Spotify&rsquo;s API was a
						simple one: with an enormous library of over four million songs,
						albums, and playlists, I knew Spotify would meet all of my criteria.
						Then, I needed to retrieve the source of the song through YouTube. I
						decided to build my own API using Node.js which searches YouTube for
						&ldquo;&lt;Song Name&gt; by &lt;Artist Name&gt;&rdquo; and scrapes
						the source of the first result then sends it to the client. The
						video is then downloaded and converted to allow for streaming. After
						I had met these requirements, I began designing the interface
						itself. Utilizing the JavaScript library React, along with
						Material-UI theming, was an easy decision for me. React makes
						developing web applications easier, and vastly improves the
						performance of said web apps. Material-UI provides some premade
						React Components that implement Google&rsquo;s Material Design
						Guidelines, providing Euterpe with a simple and familiar interface
						for users. These components can then be implemented with little to
						no work from the coder.
					</p>

					<p>
						The end result was not only something I am proud of, but something I
						find myself using daily. React and Material-UI are commonly used
						together in the open source and web development community, and
						I&rsquo;m proud I used them in this project. Leaning these tools was
						not only to better myself as a web developer, to build confidence in
						interacting with the open source community. It's easy to run into
						problems when developing an application. Diagnosing these problems
						is what allowed me to vastly improve my knowledge and comfort level
						of React.
					</p>

					<p>
						Building Euterpe helped me understand and utilize various APIs,
						React, and Material-UI. I can now confidently say I&rsquo;ve created
						a functional and useful web application. I&rsquo;ve shown Euterpe
						off to friends and family, and (of course) I use it myself often.
						Once I had the strong motivation and roadmap to creating this
						application, it was only a matter of the finer details of
						programming. Having this knowledge of web development opens me up to
						several job possibilities, as well as the ability to better
						contribute to the open source community.{' '}
					</p>
				</div>
			}
		/>
	</div>
)

export default injectSheet(styles)(UprightBuilders)
