import * as React from "react";

import injectSheet from "react-jss";

interface ImageBannerProps {
  image: string;
  classes: any;
}

const styles = theme => ({
  banner: {
    backgroundPosition: "center",
    backgroundSize: "cover",
    boxShadow: theme.shadow,
    height: "auto",
    marginBottom: 50,
    width: "100%"
  }
});

const ImageBanner: React.SFC<ImageBannerProps> = props => {
  const { classes } = props;
  return (
    <img className={classes.banner} src={props.image} alt="Banner Image" />
  );
};

export default injectSheet(styles)(ImageBanner);
