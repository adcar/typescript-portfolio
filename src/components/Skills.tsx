import * as React from "react";

import LinearProgress from "@material-ui/core/LinearProgress";
import Typography from "@material-ui/core/Typography";
import injectSheet from "react-jss";

interface IProps {
  classes: any;
}
const styles = theme => ({
  progressRoot: {
    height: 20
  },
  root: {
    display: "grid",
    gridGap: "20px",
    gridTemplate: "1fr 1fr 1fr / 1fr 1fr",
    padding: "50px 0"
  }
});

const Skills: React.SFC<IProps> = ({ classes }) => (
  <div className={classes.root}>
    <div>
      <Typography variant="h6" gutterBottom={true}>
        HTML
      </Typography>
      <LinearProgress
        variant="determinate"
        value={100}
        classes={{
          root: classes.progressRoot
        }}
      />
    </div>
    <div>
      <Typography variant="h6" gutterBottom={true}>
        CSS / SCSS
      </Typography>
      <LinearProgress
        variant="determinate"
        value={90}
        classes={{
          root: classes.progressRoot
        }}
      />
    </div>
    <div>
      <Typography variant="h6" gutterBottom={true}>
        JavaScript
      </Typography>
      <LinearProgress
        variant="determinate"
        value={90}
        classes={{
          root: classes.progressRoot
        }}
      />
    </div>
    <div>
      <Typography variant="h6" gutterBottom={true}>
        React
      </Typography>
      <LinearProgress
        variant="determinate"
        value={80}
        classes={{
          root: classes.progressRoot
        }}
      />
    </div>
    <div>
      <Typography variant="h6" gutterBottom={true}>
        Redux
      </Typography>
      <LinearProgress
        variant="determinate"
        value={80}
        classes={{
          root: classes.progressRoot
        }}
      />
    </div>
    <div>
      <Typography variant="h6" gutterBottom={true}>
        Node.js
      </Typography>
      <LinearProgress
        variant="determinate"
        value={70}
        classes={{
          root: classes.progressRoot
        }}
      />
    </div>
    <div>
      <Typography variant="h6" gutterBottom={true}>
        Python
      </Typography>
      <LinearProgress
        variant="determinate"
        value={40}
        classes={{
          root: classes.progressRoot
        }}
      />
    </div>
    <div>
      <Typography variant="h6" gutterBottom={true}>
        Java
      </Typography>
      <LinearProgress
        variant="determinate"
        value={60}
        classes={{
          root: classes.progressRoot
        }}
      />
    </div>
    <div>
      <Typography variant="h6" gutterBottom={true}>
        PHP
      </Typography>
      <LinearProgress
        variant="determinate"
        value={70}
        classes={{
          root: classes.progressRoot
        }}
      />
    </div>
    <div>
      <Typography variant="h6" gutterBottom={true}>
        SQL
      </Typography>
      <LinearProgress
        variant="determinate"
        value={20}
        classes={{
          root: classes.progressRoot
        }}
      />
    </div>
  </div>
);

export default injectSheet(styles)(Skills);
