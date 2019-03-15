import * as React from "react";

import injectSheet from "react-jss";
import PageLabel from "../components/PageLabel";
import ProjectCard from "../components/ProjectCard";

import dionysus from "../img/dionysus.png";
import euterpe from "../img/euterpe.png";
import portfolio from "../img/portfolio.png";
import uprightBuilders from "../img/uprightBuilders.png";

const styles = theme => ({
  desc: {
    padding: 30
  },
  img: {
    width: "100%"
  },
  project: {
    "&:nth-of-type(even)": {
      [theme.breaks.sm]: {
        flexDirection: "row-reverse"
      }
    },
    [theme.breaks.sm]: {
      flexDirection: "row"
    },
    alignItems: "flex-start",
    backgroundColor: theme.main,
    color: "white",
    display: "flex",
    flexDirection: "column",
    marginBottom: 20,
    marginTop: 20
  },
  projects: {
    display: "flex",
    flexDirection: "column"
  },
  root: {
    backgroundColor: "white"
  },
  title: {
    marginTop: 30
  },
  wrapper: {
    margin: "0 auto",
    maxWidth: 1000,
    padding: "32px 0",

    display: "grid",
    gridGap: "30px",
    gridTemplateColumns: "repeat(auto-fill, 280px)",
    [theme.breaks.xs]: {
      gridTemplateColumns: "repeat(auto-fill, 400px)"
    },
    justifyContent: "center"
  }
});
interface IProps {
  classes: any;
}
const Projects: React.SFC<IProps> = ({ classes }) => (
  <div className={classes.root}>
    <PageLabel title="Projects" />
    <div className={classes.wrapper}>
      <ProjectCard
        image={uprightBuilders}
        title="Upright Builders"
        content="A Wordpress website I built for Upright Builders, LLC."
        url="upright-builders"
      />
      <ProjectCard
        image={euterpe}
        title="Euterpe"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean rhoncus magna vel massa luctus tincidunt."
        url="euterpe"
      />
      <ProjectCard
        image={dionysus}
        title="Dionysus"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean rhoncus magna vel massa luctus tincidunt."
        url="dionysus"
      />
      <ProjectCard
        image={portfolio}
        title="Senior Portfolio"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean rhoncus magna vel massa luctus tincidunt."
        url="senior-portfolio"
      />
      <ProjectCard
        image={portfolio}
        title="Penguins"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean rhoncus magna vel massa luctus tincidunt."
        url="penguins"
      />
      <ProjectCard
        image={portfolio}
        title="Portfolio"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean rhoncus magna vel massa luctus tincidunt."
        url="portfolio"
      />
    </div>
  </div>
);
export default injectSheet(styles)(Projects);
