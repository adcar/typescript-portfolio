import * as React from "react";

import Project from "src/components/Project";
import ProjectParagraph from "src/components/ProjectParagraph";
import dionysusBanner from "src/img/banners/dionysus.png";

const Dionysus: React.FunctionComponent = () => (
  <Project
    title="Dionysus"
    banner={dionysusBanner}
    liveUrl="https://dionysus.acardosi.dev"
  >
    <ProjectParagraph>
      Since I already built a music interface, I decided to build a Movie and TV
      Show interface! I built this website using React, Material-UI, and
      TheMovieDB's API. Their API was very well built and I constructed this
      whole interface around it. I use their ID's for everything and make API
      requests for specific data when appropriate. Material-UI is a fantastic
      framework that I used in my Euterpe project as well. It's really easy to
      work with and looks really clean and modern.
    </ProjectParagraph>
    <ProjectParagraph>
      I decided to take on this project because I wanted to better understand
      how to properly utlize an API. I now feel confident that given a well
      constructed API I can design a modern-looking UI for it.
    </ProjectParagraph>
    <ProjectParagraph>
      If I were to do this project over, I would probably use TypeScript.
      TypeScript adds much better type support to JavaScript and makes
      mantaining a web app that much easier. Other than that, I wouldn't change
      much about this project.
    </ProjectParagraph>
    <ProjectParagraph>
      Overall, I'm pretty happy about this project. Working with TheMovieDB's
      API was a lot of fun and made this website that much more enjoyable to
      create.
    </ProjectParagraph>
  </Project>
);

export default Dionysus;
