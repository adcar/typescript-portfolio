import * as React from "react";

import Typography from "@material-ui/core/Typography";
import injectSheet from "react-jss";
import Header from "../components/Header";
import bgImg from "../img/bgImg.jpg";
import Logo from "../img/logo.svg";

interface IProps {
  classes: any;
}

const styles = theme => ({
  "@import": ["url('https://fonts.googleapis.com/css?family=Open+Sans:300')"],
  aboutBtn: {
    "&:hover": {
      backgroundColor: theme.secondary,
      color: "white"
    },
    backgroundColor: "white",
    color: "black",
    marginLeft: theme.spacing.unit
  },

  link: {
    textDecoration: "none"
  },
  logo: {
    [theme.breaks.md]: {
      height: 280,
      width: 280
    },
    height: 200,
    marginBottom: 20,
    width: 200
  },
  resumeBtn: {
    "&:hover": {
      backgroundColor: theme.secondary
    },
    backgroundColor: theme.main,
    color: "white",
    marginRight: theme.spacing.unit
  },
  subtitle: {
    [theme.breaks.md]: {
      fontSize: 34
    },
    color: "white",
    fontFamily: "Open Sans",
    fontSize: 20,
    fontWeight: "300",
    letterSpacing: "0.4em",
    marginTop: theme.spacing.unit,
    paddingLeft: "0.4em",
    textTransform: "uppercase"
  },
  title: {
    [theme.breaks.md]: {
      fontSize: 56
    },
    color: "white",
    fontSize: 30
  },
  wrapper: {
    "&:before": {
      [theme.breaks.md]: {
        height: "478px"
      },
      backgroundImage: `url(${bgImg})`,
      backgroundPosition: "center",
      backgroundSize: "1920px 1080px",
      content: "''",
      display: "block",
      filter: "blur(20px)",
      height: "329px",
      position: "absolute",
      transform: "scaleX(1.1)",
      width: "100%",
      zIndex: "-1"
    },
    alignItems: "center",
    boxShadow: theme.shadow,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: theme.spacing.unit * 3,
    width: "100%"
  }
});

const Home: React.SFC<IProps> = ({ classes }) => (
  <div>
    <Header>
      <div className={classes.wrapper}>
        <img src={Logo} className={classes.logo} alt="Alex Cardosi logo" />
        <Typography
          className={classes.title}
          component="h1"
          variant="h2"
          align="center"
        >
          Alexander Cardosi
        </Typography>
        <Typography
          variant="h4"
          component="span"
          align="center"
          className={classes.subtitle}
        >
          Web Developer
        </Typography>
      </div>
    </Header>
  </div>
);

export default injectSheet(styles)(Home);
