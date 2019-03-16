import * as React from "react";

import Project from "src/components/Project";
import ProjectParagraph from "src/components/ProjectParagraph";
import seniorPortfolioBanner from "src/img/banners/seniorPortfolio.png";

const Penguins: React.FunctionComponent = () => (
  <Project
    title="Senior Portfolio"
    banner={seniorPortfolioBanner}
    liveUrl="https://senior-portfolio.acardosi.dev"
  >
    <ProjectParagraph>
      For our Senior Portfolio assignment at Colchester High School, I created a
      website showing off some of my best works. I included my old portfolio,
      Euterpe, and Dionysus.
    </ProjectParagraph>
    <ProjectParagraph>
      For this website I used React, Material-UI and Gatsby. Gatsby lets you
      create React based websites but it has the ability to use a CMS as well. I
      don't retrieve data from anywhere in this website though. Instead, I
      created seperate React components for each page. Gatsby made this easier
      by automatically linking to components by their file names. For example,
      the url "best-works" would automatically link the component called
      "BestWorks.js".
    </ProjectParagraph>
    <ProjectParagraph>
      If I were to do this project over, I would have used a CMS (such as the
      Netlify CMS). This way, I could have put of all of my writing on that CMS
      and retrieved the data from my website. This is what Gatsby was, among
      other things, designed for.
    </ProjectParagraph>
    <ProjectParagraph>
      Overall, I’m pretty happy with this project. I learned some of the core
      mechanics of Gatsby which will help me later if I decide to create a
      React-based website that retrieves its data from a live CMS.
    </ProjectParagraph>
  </Project>
);

export default Penguins;
