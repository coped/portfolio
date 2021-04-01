export type AboutMe = string[];

export type BooksAndCourses = {
  id: number;
  name: string;
  link: string;
}[];

export type Tools = {
  [id: string]: {
    id: number;
    name: string;
    logo: string;
  }[];
};

export type ProjectInfo = {
  id: number;
  name: string;
  image: string;
  paragraphs: string[];
  websiteLink: string;
  githubLink: string;
}[];

export type SocialLinks = {
  id: number;
  image: string;
  link: string;
  alt: string;
}[];