import * as React from "react";

import Typography from "@material-ui/core/Typography";

import ReactCardFlip from "react-card-flip";
import injectSheet from "react-jss";

import { withRouter } from "react-router-dom";
const styles = theme => ({
  back: {
    backgroundColor: theme.main,
    boxShadow: theme.shadow,
    height: 140,
    [theme.breaks.xs]: {
      height: 200
    },
    padding: 30
  },
  link: {
    color: "white"
  },
  projectImage: {
    boxShadow: theme.shadow,
    height: "auto",
    width: "100%"
  },

  root: {
    color: "white",
    cursor: "pointer",
    height: 210,
    maxWidth: 280,
    [theme.breaks.xs]: {
      height: 270,
      maxWidth: 400
    }
  },
  title: {
    backgroundColor: theme.secondary,
    padding: "15px 0"
  }
});
interface IProps {
  classes: any;
  image: string;
  title: string;
  content: string;
  url: string;
  history: any;
}
interface IState {
  isFlipped: boolean;
}

class ProjectCard extends React.Component<IProps, IState> {
  constructor(props) {
    super(props);
    this.state = {
      isFlipped: false
    };
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  public handleClick(e) {
    e.preventDefault();
    const { history, url } = this.props;
    history.push(`/projects/${url}`);
  }
  public handleMouseEnter(e) {
    e.preventDefault();
    this.setState({ isFlipped: true });
  }
  public handleMouseLeave(e) {
    e.preventDefault();
    this.setState({ isFlipped: false });
  }

  public render() {
    const { classes, title, image, content } = this.props;
    return (
      <div
        className={classes.root}
        onMouseOver={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        onClick={this.handleClick}
      >
        <Typography
          variant="h4"
          align="center"
          className={classes.title}
          color="inherit"
        >
          {title}
        </Typography>
        <ReactCardFlip isFlipped={this.state.isFlipped}>
          <img
            src={image}
            alt="Project Image"
            key="front"
            className={classes.projectImage}
          />
          <div className={classes.back} key="back">
            {content}
          </div>
        </ReactCardFlip>
      </div>
    );
  }
}

export default withRouter(injectSheet(styles)(ProjectCard));
