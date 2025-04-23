import type { Link } from "../../lib/types";
import github from "public/images/github.svg";
import linkedin from "public/images/linkedin.png";

export const LINKS: Link[] = [
  {
    icon: github,
    href: "https://github.com/coped",
    alt: "Github icon",
    dimensions: { width: 70, height: 70 },
  },
  {
    icon: linkedin,
    href: "https://www.linkedin.com/in/dennis-cope/",
    alt: "LinkedIn icon",
    dimensions: { width: 82, height: 70 },
  },
];
