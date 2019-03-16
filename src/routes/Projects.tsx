import * as React from "react";

import injectSheet from "react-jss";
import PageLabel from "../components/PageLabel";
import ProjectCard from "../components/ProjectCard";

import dionysus from "../img/thumbnails/dionysus.png";
import euterpe from "../img/thumbnails/euterpe.png";
import penguins from "../img/thumbnails/penguins.png";
import portfolio from "../img/thumbnails/portfolio.png";
import seniorPortfolio from "../img/thumbnails/seniorPortfolio.png";
import uprightBuilders from "../img/thumbnails/uprightBuilders.png";

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
        content="A Music interface built with React, Redux, and Material-UI."
        url="euterpe"
      />
      <ProjectCard
        image={dionysus}
        title="Dionysus"
        content="A Movie and TV Show interface built with React and Material-UI."
        url="dionysus"
      />
      <ProjectCard
        image={seniorPortfolio}
        title="Senior Portfolio"
        content="My Senior Portfolio project for Colchester High School"
        url="senior-portfolio"
      />
      <ProjectCard
        image={penguins}
        title="Penguins"
        content="A simple React-based website dedicated to my favorite animal"
        url="penguins"
      />
      <ProjectCard
        image={portfolio}
        title="Portfolio"
        content="This website!"
        url="portfolio"
      />
    </div>
  </div>
);
export default injectSheet(styles)(Projects);
