import * as React from "react";

import injectSheet from "react-jss";

interface ImageBannerProps {
  image: string;
  classes: any;
  link: string;
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
  const { classes, link, image } = props;
  return (
    <a href={link} title="Live version">
      <img className={classes.banner} src={image} alt="Banner Image" />
    </a>
  );
};

export default injectSheet(styles)(ImageBanner);
