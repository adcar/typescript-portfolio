import * as React from "react";

import { Typography } from "@material-ui/core";
import injectSheet from "react-jss";

const styles = {
  text: {
    fontSize: "14pt",
    margin: "10px 0",
    textIndent: "5em each-line"
  }
};

interface IProps {
  classes: any;
  children: any;
}

const ProjectParagraph: React.FunctionComponent<IProps> = ({
  children,
  classes
}) => <Typography className={classes.text}>{children}</Typography>;
export default injectSheet(styles)(ProjectParagraph);
