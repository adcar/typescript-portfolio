import * as React from "react";
import injectSheet from "react-jss";
import bgImg from "../img/bgImg.jpg";
const styles = theme => ({
  root: {
    position: "relative",
    zIndex: "-2",

    alignItems: "center",
    backgroundColor: theme.bg,
    backgroundImage: `url(${bgImg})`,
    backgroundPosition: "center",
    backgroundSize: "1920px 1080px",
    color: "white",
    display: "flex",
    height: "100vh",
    justifyContent: "center",
    margin: "0 auto",
    overflow: "hidden",
    transition:
      "transform 0.5s ease-out, border-radius 1s ease-in, width 0.75s ease-in",
    width: "100%"
  }
});
interface IProps {
  classes: any;
  chidlren: any;
}

class Header extends React.Component<IProps> {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false
    };
  }
  public componentDidMount() {
    setTimeout(() => {
      this.setState({
        isLoaded: true
      });
    }, 100);
  }
  public render() {
    const { classes, children } = this.props;
    return <div className={classes.root}>{children}</div>;
  }
}

export default injectSheet(styles)(Header);
