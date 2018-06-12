import * as React from 'react'

import injectSheet from 'react-jss'
import PageLabel from '../../components/PageLabel'
import Project from '../../components/Project'

import headerImg from '../../img/uprightBuilders.webp'
interface IProps {
	classes: any
}
const styles = theme => ({})
const UprightBuilders: React.SFC<IProps> = ({ classes }) => (
	<div>
		<PageLabel title="Upright Builders" />
		<Project
			quote="Believe you can and you’re halfway there."
			image={headerImg}
			content={
				<div>
					<p>
						The Computer Animation and Web Design (CAWD) program at the Center
						for Technology, Essex works with real world clients to give their
						students opportunities. Michael Irwin recently started his own
						construction company, and needed a website and branding. He decided
						to ask CAWD for our help. My classmate Alexander Goodman and I
						happily agreed. Goodman designed the logo and other branding
						aspects, whereas I created the website.
					</p>

					<p>
						This website is powered by a program called Wordpress, which allows
						for effortless editing of pages through an interface comparable to
						Google Docs. This content management system, or CMS, allowed Irwin
						to add his own content in the most intuitive way possible. Working
						with Wordpress was a first for me, nonetheless I was enthused to
						begin learning the software. For every client project, a designer
						must start with ideas and prototypes, to allow for client input. The
						client was delighted to help with this process. After we had agreed
						upon a general site design, I started with an HTML5 blank Wordpress
						theme and modified everything until it fit the client&rsquo;s needs
						perfectly. Throughout this process, I made an abundance of
						revisions. The clients ideas and proposals were especially important
						in this process. For example, Irwin recently asked for me to add a
						slideshow, and a couple days later I gave him a fully-functional
						carousel with Wordpress integration.{' '}
					</p>

					<p>
						The Upright Builders website represents how I can adapt to new
						situations quickly and efficiently, in addition to being an
						excellent example of real-world client work. The website&rsquo;s
						architecture, layout, color choices, and graphic design patterns are
						all something I am immensely proud of. Throughout this project, I
						learned the ins and outs of Wordpress, in addition to workplace
						communication skills.
					</p>

					<p>
						If I were to do this project over, I would probably use something
						other than Wordpress. It&rsquo;s a powerful tool, but it can be
						difficult to work with at times. For example, the version system is
						counterintuitive, and forces the designer to adjust the version
						number within a stylesheet file in order to have any changes. The
						intuitive and superior nature of JavaScript easily trumps that of
						PHP, therefore I&rsquo;d be inclined to use GatsbyJS, DatoCMS, and
						React. These technologies wouldn&rsquo;t change the product, but it
						would allow for faster, cleaner, and better code.
					</p>

					<p>
						As a whole, I&rsquo;m content with this project. I found that
						fulfilling the clients needs came easy with my prior coding
						experience. Even though learning Wordpress was challenging, I
						endured, and created a product client and I were proud of. The real
						word experience from this project is priceless: it is a skill that
						is sure to help me in the coming career-world.{' '}
					</p>
				</div>
			}
		/>
	</div>
)

export default injectSheet(styles)(UprightBuilders)
