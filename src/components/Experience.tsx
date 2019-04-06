import * as React from "react";

import injectSheet from "react-jss";

import MoneyIcon from "@material-ui/icons/AttachMoney";
import WebsiteIcon from "@material-ui/icons/ChromeReaderMode";
import Experience from "./BoxWithIcon";

import { Link } from "react-router-dom";

interface IProps {
  classes: any;
}
const styles = theme => ({
  icon: {
    color: theme.main
  },
  item: {
    padding: "15px 0"
  },
  link: {
    color: theme.secondary
  },
  root: {
    padding: "30px 20px"
  }
});

const Awards: React.SFC<IProps> = ({ classes }) => (
  <div className={classes.root}>
    <div className={classes.item}>
      <Experience
        icon={<WebsiteIcon />}
        title="Upright Builders - Web Developer"
        desc={
          <span>
            I built the Wordpress theme and general site for Upright Builders.
            Click{" "}
            <Link to="/project/upright-builders" className={classes.link}>
              Here
            </Link>{" "}
            to learn more.
          </span>
        }
      />
    </div>
    <div className={classes.item}>
      <Experience
        icon={<MoneyIcon />}
        title="Jolley - Cashier"
        desc={
          <span>
            Being a cashier for Jolley involved counting money, answering
            questions, and scanning items.
          </span>
        }
      />
    </div>
  </div>
);

export default injectSheet(styles)(Awards);
