import * as React from "react";

import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter as Router, Route } from "react-router-dom";

import amber from "@material-ui/core/colors/amber";

import asyncComponent from "./components/AsyncComponent";

import injectSheet from "react-jss";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import AppWrapper from "./AppWrapper";

const AboutMe = asyncComponent(() => import("./routes/AboutMe"));
const Home = asyncComponent(() => import("./routes/Home"));
const Projects = asyncComponent(() => import("./routes/Projects"));
const Resume = asyncComponent(() => import("./routes/Resume"));
const UprightBuilders = asyncComponent(() =>
  import("./routes/projects/UprightBuilders")
);
const Euterpe = asyncComponent(() => import("./routes/projects/Euterpe"));
const Dionysus = asyncComponent(() => import("./routes/projects/Dionysus"));
const SeniorPortfolio = asyncComponent(() =>
  import("./routes/projects/SeniorPortfolio")
);
const Penguins = asyncComponent(() => import("./routes/projects/Penguins"));
const Portfolio = asyncComponent(() => import("./routes/projects/Portfolio"));

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

const App: React.FunctionComponent<IProps> = ({ classes }) => {
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

                    <Route path="/project/euterpe" component={Euterpe} />

                    <Route path="/project/dionysus" component={Dionysus} />

                    <Route
                      path="/project/senior-portfolio"
                      component={SeniorPortfolio}
                    />

                    <Route path="/project/penguins" component={Penguins} />

                    <Route path="/project/portfolio" component={Portfolio} />
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
};

export default injectSheet(styles)(App);
