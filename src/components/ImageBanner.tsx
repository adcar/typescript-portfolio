import * as React from "react";

import injectSheet from "react-jss";

interface ImageBannerProps {
  image: string;
  classes: any;
}

const styles = theme => ({
  banner: {
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "auto",
    width: "100%",
    padding: theme.spacing.unit,
    boxShadow: theme.shadow,
    marginBottom: 50
  }
});

const ImageBanner: React.SFC<ImageBannerProps> = props => {
  const { classes } = props;
  return <img className={classes.banner} src={props.image} />;
};

export default injectSheet(styles)(ImageBanner);
