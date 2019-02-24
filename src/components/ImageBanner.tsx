import * as React from "react";

import injectSheet from "react-jss";

interface ImageBannerProps {
  image: string;
  classes: any;
}

const styles = theme => ({
  banner: {
    height: 500,
    backgroundSize: "cover",
    backgroundPosition: "center",
    maxWidth: 1200,
    padding: theme.spacing.unit,
    margin: "20px auto",
    boxShadow: theme.shadow
  }
});

const ImageBanner: React.SFC<ImageBannerProps> = props => {
  const { classes } = props;
  return (
    <div
      className={classes.banner}
      style={{ backgroundImage: `url(${props.image})` }}
    />
  );
};

export default injectSheet(styles)(ImageBanner);
