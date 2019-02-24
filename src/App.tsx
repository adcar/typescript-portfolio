import * as React from "react";

import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter as Router, Route } from "react-router-dom";

import amber from "@material-ui/core/colors/amber";

import AboutMe from "./routes/AboutMe";
import Home from "./routes/Home";
import Projects from "./routes/Projects";
import Resume from "./routes/Resume";

import injectSheet from "react-jss";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import AppWrapper from "./AppWrapper";
import UprightBuilders from "./routes/projects/UprightBuilders";

const theme = createMuiTheme({
  palette: {
    background: {
      default: "white"
    },
    primary: {
      main: "#00BCD4"
    },
    secondary: amber,
    type: "light"
  },
  typography: {
    useNextVariants: true
  }
});

const styles = jssTheme => ({
  bg: {
    backgroundColor: jssTheme.bg,
    minHeight: "100%"
  },
  wrap: {
    minHeight: "100vh"
  }
});

interface IProps {
  classes: any;
}

class App extends React.Component<IProps> {
  public render() {
    const { classes } = this.props;
    return (
      <div className={classes.bg}>
        <MuiThemeProvider theme={theme}>
          <Router>
            <AppWrapper>
              <div>
                <Navbar />
                <div id="outer-container">
                  <div id="page-wrap">
                    <div className={classes.wrap}>
                      <Route path="/" exact={true} component={Home} />
                      <Route path="/resume" component={Resume} />
                      <Route path="/about-me" component={AboutMe} />
                      <Route path="/projects" component={Projects} />

                      <Route
                        path="/project/upright-builders"
                        component={UprightBuilders}
                      />
                      <Route />
                      <Route />
                      <Route />
                    </div>
                    <Footer />
                  </div>
                </div>
              </div>
            </AppWrapper>
          </Router>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default injectSheet(styles)(App);
