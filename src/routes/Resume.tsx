import * as React from "react";

import Typography from "@material-ui/core/Typography";
import EducationIcon from "@material-ui/icons/School";
import AwardsIcon from "@material-ui/icons/Star";
import SkillsIcon from "@material-ui/icons/Whatshot";
import WorkIcon from "@material-ui/icons/Work";

import injectSheet from "react-jss";

import Awards from "../components/Awards";
import EducationTimeline from "../components/EducationTimeline";
import Experience from "../components/Experience";
import PageLabel from "../components/PageLabel";
import Skills from "../components/Skills";

import Button from "@material-ui/core/Button";

import DownloadIcon from "@material-ui/icons/ArrowDownward";

interface IProps {
  classes: any;
}

const styles = theme => ({
  button: {
    color: "white",
    justifySelf: "center",
    margin: "0 auto"
  },
  icon: {
    color: theme.secondary,
    height: 40,
    width: 40
  },
  info: {
    backgroundColor: "green",
    gridRow: "1 / end"
  },
  logo: {
    borderRadius: "50%",
    margin: "0 auto"
  },
  logoWrapper: {},
  progressRoot: {
    height: 20
  },
  root: {
    backgroundColor: "white"
  },
  title: {
    marginTop: 50
  },
  wrapper: {
    display: "flex",
    flexDirection: "column",

    color: "white",
    margin: "0 auto",
    maxWidth: 800,
    padding: 32
  }
});

const Resume: React.SFC<IProps> = ({ classes }) => (
  <div className={classes.root}>
    <PageLabel title="Résumé" />
    <div className={classes.wrapper}>
      <Typography variant="display2" component="h2" className={classes.title}>
        <SkillsIcon className={classes.icon} /> Skills
      </Typography>
      <Skills />
      <Typography variant="display2" component="h2" className={classes.title}>
        <EducationIcon className={classes.icon} /> Education
      </Typography>
      <EducationTimeline />
      <Typography variant="display2" component="h2" className={classes.title}>
        <WorkIcon className={classes.icon} /> Experience
      </Typography>
      <Experience />
      <Typography variant="display2" component="h2" className={classes.title}>
        <AwardsIcon className={classes.icon} /> Awards
      </Typography>
      <Awards />
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        component="a"
        href="/dl/resume.pdf"
      >
        <DownloadIcon style={{ marginRight: 10 }} />
        Download (PDF)
      </Button>
    </div>
  </div>
);

export default injectSheet(styles)(Resume);
