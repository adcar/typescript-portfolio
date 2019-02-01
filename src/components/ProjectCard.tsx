import * as React from "react";

import Typography from "@material-ui/core/Typography";

import ReactCardFlip from "react-card-flip";
import injectSheet from "react-jss";

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
  link: string;
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
    this.handleClick = this.handleClick.bind(this);
  }

  public handleClick(e) {
    e.preventDefault();
    this.setState({ isFlipped: !this.state.isFlipped });
  }

  public render() {
    const { classes, title, image, content, link } = this.props;
    return (
      <div className={classes.root} onClick={this.handleClick}>
        <Typography
          variant="display1"
          align="center"
          className={classes.title}
          color="inherit"
        >
          {title}
        </Typography>
        <ReactCardFlip isFlipped={this.state.isFlipped}>
          <h1>hi</h1>
          <img
            src={image}
            alt="Project Image"
            key="front"
            className={classes.projectImage}
          />
          <div className={classes.back} key="back">
            {content}{" "}
            <a className={classes.link} target="_blank" href={link}>
              {link}
            </a>
          </div>
        </ReactCardFlip>
      </div>
    );
  }
}
export default injectSheet(styles)(ProjectCard);
