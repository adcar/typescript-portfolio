import * as React from "react";

import Project from "src/components/Project";
import ProjectParagraph from "src/components/ProjectParagraph";
import uprightBuildersBanner from "src/img/banners/uprightBuilders.png";

const UprightBuilders: React.FunctionComponent = () => (
  <Project
    title="Upright Builders"
    banner={uprightBuildersBanner}
    liveUrl="http://uprightbuildersvt.com"
  >
    <ProjectParagraph>
      Michael Irwin is starting his own construction business, called Upright
      Builders. Michael decided to approach our Computer Animation and Web
      Design (CAWD) program and ask us if we could help with his website. Alex
      Goodman and I happily agreed and began working on his website and logo.
      Alex was in charge of graphic design aspects, whereas I worked on the more
      technical side of things, by building a Wordpress theme. Wordpress allows
      for the easy editing of pages through an interface comparable to Google
      Docs. This lets the client to add their own content, without needed any
      knowledge of programming or web design. I had never used Wordpress before,
      but I was enthused to begin learning the software. Behind the scenes, I
      used HTML, CSS, JavaScript, and PHP to design the theme itself. I began by
      thinking of some different site ideas, and asked the client for his input.
      After we had decided a general site design, I started out with a base
      HTML5 theme and modified everything until it fit the client’s exact needs.
      Throughout this process, I made an abundance of revisions. Anytime the
      client wanted to change something I would be sure to fullfill his wishes.
    </ProjectParagraph>
    <ProjectParagraph>
      The Upright Builders website represents how I can adapt to new situations
      quickly and efficiently. This project is also a great example of real-life
      client work. Above all, I am pleased with how the site came out and enjoy
      the overall design. Throughout this project, I learned the ins and outs of
      Wordpress, as well as how to effectively communicate with clients.
    </ProjectParagraph>
    <ProjectParagraph>
      If I were to do this project over, I would probably use something other
      than Wordpress. It’s a great tool, but it can be difficult to work with at
      times. I much prefer JavaScript over PHP so I’d be inclined to use
      something like GatsbyJS + Netlify CMS + React. This stack would still
      allow for an easy-to-use interface for the client, but it would also allow
      me to code using JavaScript and React.
    </ProjectParagraph>
    <ProjectParagraph>
      Overall, I’m very happy with this project. This project gave me valuable
      real world experience while still attending High School.
    </ProjectParagraph>
  </Project>
);

export default UprightBuilders;
