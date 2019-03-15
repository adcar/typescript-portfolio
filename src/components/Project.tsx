import * as React from "react";

import ImageBanner from "./ImageBanner";
import PageLabel from "./PageLabel";

import injectSheet from "react-jss";

const styles = theme => ({
  root: {
    backgroundColor: "white"
  },
  summary: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    margin: "0 auto",
    marginBottom: 25,
    maxWidth: "1000px",
    padding: theme.spacing.unit * 4
  }
});

interface IProps {
  banner: string;
  title: string;
  classes: any;
}

const Project: React.FunctionComponent<IProps> = ({
  classes,
  children,
  banner,
  title
}) => (
  <div className={classes.root}>
    <PageLabel title={title} />

    <div className={classes.summary}>
      <ImageBanner title="yay" image={banner} />
      {children}
    </div>
  </div>
);

export default injectSheet(styles)(Project);
