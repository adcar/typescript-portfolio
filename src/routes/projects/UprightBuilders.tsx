import * as React from "react";

import ImageBanner from "../../components/ImageBanner";
import PageLabel from "../../components/PageLabel";

import { Typography } from "@material-ui/core";
import uprightBuildersBanner from "../../img/banners/uprightBuilders.png";
import injectSheet from "react-jss";

const styles = theme => ({
  summary: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    maxWidth: "1000px",
    padding: theme.spacing.unit * 4,
    margin: "0 auto",
    marginBottom: 25
  },
  text: {
    margin: "10px 0"
  }
});

interface IProps {
  banner: string;
  content: string;
  title: string;
  classes: any;
}
class UprightBuilders extends React.Component<IProps> {
  public render() {
    const { classes } = this.props;
    return (
      <div>
        <PageLabel title="Upright Builders" />

        <div className={classes.summary}>
          <ImageBanner title="yay" image={uprightBuildersBanner} />
          <Typography className={classes.text}>
            Michael Irwin is starting his own construction business, called
            Upright Builders. Michael decided to approach our Computer Animation
            and Web Design (CAWD) program and ask us if we could help with his
            website. Alex Goodman and I happily agreed and began working on his
            website and logo. Alex was in charge of graphic design aspects,
            whereas I worked on the more technical side of things, by building a
            Wordpress theme. This website is powered by a program called
            Wordpress, which allows easy editing of pages through a interface
            comparable to Google Docs. This allows the client to add their own
            content, without having any knowledge of programming or web design.
            I had never used Wordpress before, but I was enthused to begin
            learning the software. Behind the scenes, I used HTML, CSS,
            JavaScript, and PHP to design the theme. I began thinking of some
            different site ideas, and asked the client for his input. After we
            had decided a general site design, I started out with a base HTML5
            theme and modified everything until it fit the client’s needs
            perfectly. Throughout this process, I made an abundance of
            revisions. Anytime the client wanted to change something I would be
            sure to meet his needs. For example, the client recently asked for
            me to add a slideshow, and a couple days later I gave him a
            fully-functional carousel with Wordpress integration (for allowing
            the swapping of images).
          </Typography>
          <Typography className={classes.text}>
            The Upright Builders website represents how I can adapt to new
            situations quickly and efficiently. This project is also a great
            example of real-life client work. Above all, I am pleased with how
            the site came out and enjoy the overall design. Throughout this
            project, I learned the ins and outs of Wordpress, as well as how to
            talk to clients and ask for their input. I would show the client
            some design ideas, and ask for his input, rather than building
            something that only I enjoyed.
          </Typography>
          <Typography className={classes.text}>
            If I were to do this project over, I would probably use something
            other than Wordpress. It’s a great tool, but it can be difficult to
            work with at times. I much prefer JavaScript over PHP so I’d be
            inclined to use something like GatsbyJS + Netlify CMS + React. This
            stack would still allow for an easy-to-use interface for the client,
            but allow me to code using JavaScript and React.
          </Typography>
          <Typography className={classes.text}>
            Overall, I’m very happy with this project. I found it was important
            to keep believing in myself, even when I was struggling with the
            technical details of Wordpress. This project gave me valuable real
            world experience while still attending High School.
          </Typography>
        </div>
      </div>
    );
  }
}

export default injectSheet(styles)(UprightBuilders);
