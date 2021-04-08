export type AboutMe = string;

export type BookAndCourse = {
  id: string;
  name: string;
  link: string;
};

export type Tool = {
  id: string;
  name: string;
  logo: string;
};

export type ProjectInfo = {
  id: string;
  name: string;
  image: string;
  paragraphs: string[];
  websiteLink: string;
  githubLink: string;
};

export type SocialLink = {
  id: string;
  image: string;
  link: string;
  alt: string;
};
