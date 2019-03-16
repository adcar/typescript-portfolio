import * as React from "react";

import { Typography } from "@material-ui/core";
import ImageBanner from "./ImageBanner";
import PageLabel from "./PageLabel";

import injectSheet from "react-jss";

const styles = theme => ({
  link: {
    color: theme.bg
  },
  liveVersion: {
    alignSelf: "center",
    paddingBottom: theme.spacing.unit * 2
  },
  root: {
    backgroundColor: "white"
  },
  summary: {
    alignItems: "flex-start",
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
  liveUrl: string;
  classes: any;
}

const Project: React.FunctionComponent<IProps> = ({
  classes,
  children,
  banner,
  title,
  liveUrl
}) => (
  <div className={classes.root}>
    <PageLabel title={title} />

    <div className={classes.summary}>
      <ImageBanner title="yay" image={banner} link={liveUrl} />
      <div className={classes.liveVersion}>
        <Typography variant="h5">
          Check out the{" "}
          <a className={classes.link} href={liveUrl}>
            live version
          </a>
          !
        </Typography>
      </div>
      {children}
    </div>
  </div>
);

export default injectSheet(styles)(Project);
