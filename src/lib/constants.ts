import { Lora } from "next/font/google";
import type { Link } from "@/lib/types";
import github from "@/assets/github.svg";
import linkedin from "@/assets/linkedin.png";

export const SMALL_SCREEN_MAX_WIDTH = 900;
export const INDEX_ICON_DIMENSION = 60;
export const INDEX_PROFILE_IMAGE_DIMENSION = 338;

export const FOOTER_LINKS: Link[] = [
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
