import * as React from "react";

import Project from "src/components/Project";
import ProjectParagraph from "src/components/ProjectParagraph";
import portfolioBanner from "src/img/banners/portfolio.png";

const Portfolio: React.FunctionComponent = () => (
  <Project
    title="Portfolio"
    banner={portfolioBanner}
    liveUrl="https://acardosi.dev"
  >
    <ProjectParagraph>
      This is the website you're reading from right now! For this project I used
      TypeScript, React, and Material-UI. The goal of this website was to show
      off some of my projects, give a résumé, and tell a little about myself.
    </ProjectParagraph>
    <ProjectParagraph>
      There is nothing I would change about this project If I were to do it
      over. If I want to do something differently, I'll just change a few
      components. I already changed the theme colors several times during
      development and I probably will again. Although, I really like these
      current colors.
    </ProjectParagraph>
    <ProjectParagraph>
      Overall, I’m very happy with this project. I found it was important to
      keep believing in myself, even when I was struggling with the technical
      details of Wordpress. This project gave me valuable real world experience
      while still attending High School.
    </ProjectParagraph>
  </Project>
);

export default Portfolio;
