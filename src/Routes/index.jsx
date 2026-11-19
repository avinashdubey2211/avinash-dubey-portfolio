import About from "../Component/About";
import Contact from "../Component/Contact";
import Project from "../Component/Project";

import Services from "../Component/Services";

export const routes = [
  {
    id: 1,
    path: "/about",
    element: <About />,
  },

  {
    id: 2,
    path: "/services",
    element: <Services />,
  },
   {
    id: 3,
    path: "/projects",
    element: <Project />,
  },
  {
    id: 4,
    path: "/contact",
    element: <Contact />,
  }
];