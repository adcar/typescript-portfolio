import * as React from "react";

import Project from "src/components/Project";
import ProjectParagraph from "src/components/ProjectParagraph";
import penguinsBanner from "src/img/banners/penguins.png";

const Penguins: React.FunctionComponent = () => (
  <Project
    title="Penguins"
    banner={penguinsBanner}
    liveUrl="https://penguins.acardosi.dev"
  >
    <ProjectParagraph>
      I love penguins. They are by far the coolest creatures on planet Earth.
      Anyway, My assignment for this project was to create a website about
      anything, as long as it followed a particular style. I decided to use
      React and my own JSS code for this website. I could've used HTML and SCSS
      as well since this is just a one page site.
    </ProjectParagraph>
    <ProjectParagraph>
      The design was the most important part of this project. I made sure
      everything looked aesthetically pleasing. Every image has a subtle purple
      gradient that gives the design plenty of contrast. At the bottom of the
      site, you can see a penguin I created using only CSS!
    </ProjectParagraph>
    <ProjectParagraph>
      If I were to do this project over, I would probably not use React. I got a
      bit caught up in using React for everything and this project really didn't
      need it. A one page site that doesn't get its content from any CMS isn't
      somewhere React code should be.
    </ProjectParagraph>
    <ProjectParagraph>
      Overall, I’m really happy with this project. It came out a lot better than
      I was expecting.
    </ProjectParagraph>
  </Project>
);

export default Penguins;
