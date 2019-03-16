import * as React from "react";

import Typography from "@material-ui/core/Typography";
import injectSheet from "react-jss";
import PageLabel from "../components/PageLabel";

import ProfilePhoto from "../img/profilePhoto.jpg";

interface IProps {
  classes: any;
}

const styles = theme => ({
  image: {
    borderRadius: "50%",
    float: "left",
    paddingRight: "1em",
    shapeOutside: "circle(50%)"
  },
  link: {
    "&:hover": {
      textDecoration: "underline"
    },
    color: theme.main,
    textDecoration: "none"
  },
  root: {
    backgroundColor: "white"
  },
  section: {
    clear: "left",
    paddingTop: "50px"
  },
  text: {
    fontSize: "14pt"
  },
  wrapper: {
    color: "white",
    margin: "0 auto",
    maxWidth: 800,
    padding: "50px 32px"
  }
});

const AboutMe: React.SFC<IProps> = ({ classes }) => (
  <div className={classes.root}>
    <PageLabel title="About Me" />
    <div className={classes.wrapper}>
      <div>
        <img className={classes.image} src={ProfilePhoto} alt="Profile Photo" />
        <Typography variant="h5">Introduction</Typography>
        <Typography className={classes.text}>
          Hi, I'm Alexander Cardosi, an aspiring front-end developer from
          Colchester, Vermont. I'm currently studying Software Engineering at
          Vermont Technical College. My interests generally involve computer
          science and contributing to the open source community any way I can.
        </Typography>
      </div>

      <div className={classes.section}>
        <Typography variant="h5">Interests</Typography>
        <Typography className={classes.text}>
          I have a few hobbies, most of which revolve around Computer Science.
          My hobbies include web development, software enginnering, photography,
          graphic design, and maintaining a few Arch Linux packages.
        </Typography>
      </div>
      <div className={classes.section}>
        <Typography variant="h5">Social Media</Typography>
        <Typography className={classes.text}>
          You can find me on <a href="https://github.com/adcar">GitHub</a> and{" "}
          <a href="https://twitter.com/adcardosi">Twitter</a>.
        </Typography>
      </div>
      <div className={classes.section}>
        <Typography variant="h5">Credits</Typography>
        <Typography className={classes.text}>
          This website was created with{" "}
          <a href="https://reactjs.org" className={classes.link}>
            React
          </a>
          ,{" "}
          <a href="https://material-ui.com/" className={classes.link}>
            Material-UI
          </a>
          , and{" "}
          <a href="https://www.typescriptlang.org/" className={classes.link}>
            Typescript
          </a>
          .
        </Typography>
        <Typography>
          Icons are provided by{" "}
          <a href="https://material.io/tools/icons/" className={classes.link}>
            Material Icons
          </a>{" "}
          and{" "}
          <a href="https://www.freepik.com" className={classes.link}>
            FreePik
          </a>
        </Typography>
        <Typography>
          Header Photo by{" "}
          <a href="https://unsplash.com/@laurenmancke" className={classes.link}>
            Lauren Mancke
          </a>{" "}
          on{" "}
          <a href="https://unsplash.com/" className={classes.link}>
            Unsplash
          </a>
          .
        </Typography>
      </div>
    </div>
  </div>
);

export default injectSheet(styles)(AboutMe);
