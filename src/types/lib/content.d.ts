export type AboutMe = string;

export type BookAndCourse = {
  id: number;
  name: string;
  link: string;
};

export type Tool = {
  id: number;
  name: string;
  logo: string;
};

export type ProjectInfo = {
  id: number;
  name: string;
  image: string;
  paragraphs: string[];
  websiteLink: string;
  githubLink: string;
};

export type SocialLink = {
  id: number;
  image: string;
  link: string;
  alt: string;
};
