import * as React from "react";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import SvgIcon from "@material-ui/core/SvgIcon";
import Typography from "@material-ui/core/Typography";
import injectSheet from "react-jss";

import Email from "@material-ui/icons/Email";
import Link from "@material-ui/icons/Link";
import Phone from "@material-ui/icons/Phone";

const styles = theme => ({
  item: {
    color: "white",
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing.unit * 2
  },
  link: {
    "&:hover": {
      textDecoration: "underline"
    },
    color: "white",
    textDecoration: "none"
  },
  listItemIcon: {
    color: "white"
  },
  listItemText: {
    color: "white !important"
  },
  root: {
    alignItems: "center",
    backgroundColor: theme.main,
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    padding: "5vh 2vw"
  }
});
interface IProps {
  classes: any;
}
class Footer extends React.Component<IProps> {
  public render() {
    const { classes } = this.props;

    return (
      <footer className={classes.root}>
        <div className={classes.item}>
          <Typography variant="h4" align="center" color="inherit">
            Social
          </Typography>
          <List>
            <ListItem className={classes.listItem}>
              <ListItemIcon>
                <SvgIcon className={classes.listItemIcon}>
                  <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z" />
                </SvgIcon>
              </ListItemIcon>
              <ListItemText color="inherit">
                <a
                  className={classes.link}
                  href="https://twitter.com/adcardosi"
                >
                  @adcardosi
                </a>
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <SvgIcon className={classes.listItemIcon}>
                  <path d="M24 8.182l-.018-.087-.017-.05c-.01-.024-.018-.05-.03-.075-.003-.018-.015-.034-.02-.05l-.035-.067-.03-.05-.044-.06-.046-.045-.06-.045-.046-.03-.06-.044-.044-.04-.015-.02L12.58.19c-.347-.232-.796-.232-1.142 0L.453 7.502l-.015.015-.044.035-.06.05-.038.04-.05.056-.037.045-.05.06c-.02.017-.03.03-.03.046l-.05.06-.02.06c-.02.01-.02.04-.03.07l-.01.05C0 8.12 0 8.15 0 8.18v7.497c0 .044.003.09.01.135l.01.046c.005.03.01.06.02.086l.015.05c.01.027.016.053.027.075l.022.05c0 .01.015.04.03.06l.03.04c.015.01.03.04.045.06l.03.04.04.04c.01.013.01.03.03.03l.06.042.04.03.01.014 10.97 7.33c.164.12.375.163.57.163s.39-.06.57-.18l10.99-7.28.014-.01.046-.037.06-.043.048-.036.052-.058.033-.045.04-.06.03-.05.03-.07.016-.052.03-.077.015-.045.03-.08v-7.5c0-.05 0-.095-.016-.14l-.014-.045.044.003zm-11.99 6.28l-3.65-2.44 3.65-2.442 3.65 2.44-3.65 2.44zm-1.034-6.674l-4.473 2.99L2.89 8.362l8.086-5.39V7.79zm-6.33 4.233l-2.582 1.73V10.3l2.582 1.726zm1.857 1.25l4.473 2.99v4.82L2.89 15.69l3.618-2.417v-.004zm6.537 2.99l4.474-2.98 3.613 2.42-8.087 5.39v-4.82zm6.33-4.23l2.583-1.72v3.456l-2.583-1.73zm-1.855-1.24L13.042 7.8V2.97l8.085 5.39-3.612 2.415v.003z" />
                </SvgIcon>
              </ListItemIcon>
              <ListItemText>
                <a className={classes.link} href="https://codepen.io/adcar">
                  @adcar
                </a>
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <SvgIcon className={classes.listItemIcon}>
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </SvgIcon>
              </ListItemIcon>
              <ListItemText>
                <a className={classes.link} href="https://github.com/adcar">
                  @adcar
                </a>
              </ListItemText>
            </ListItem>
          </List>
        </div>
        <div className={classes.item}>
          <Typography variant="h4" align="center" color="inherit">
            Contact
          </Typography>
          <List>
            <ListItem>
              <ListItemIcon>
                <Email className={classes.listItemIcon} />
              </ListItemIcon>
              <ListItemText>
                <a
                  className={classes.link}
                  href="mailto:alexanderdcardosi@gmail.com"
                >
                  alexanderdcardosi@gmail.com
                </a>
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Phone className={classes.listItemIcon} />
              </ListItemIcon>
              <ListItemText>
                {" "}
                <a className={classes.link} href="tel:+18025056525">
                  (802) 505-6525
                </a>
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Link className={classes.listItemIcon} />
              </ListItemIcon>
              <ListItemText>
                <a className={classes.link} href="https://alexcardosi.me">
                  https://alexcardosi.me
                </a>
              </ListItemText>
            </ListItem>
          </List>
        </div>
      </footer>
    );
  }
}

export default injectSheet(styles)(Footer);
