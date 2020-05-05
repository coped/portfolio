import rubyLogo from "assets/images/icons/ruby-logo.svg";
import railsLogo from "assets/images/icons/rails-logo.svg";
import rspecLogo from "assets/images/icons/rspec-logo.svg";
import pgLogo from "assets/images/icons/pg-logo.svg";
import jsLogo from "assets/images/icons/javascript-logo.svg";
import reactLogo from "assets/images/icons/react-logo.svg";
import htmlLogo from "assets/images/icons/html-logo.svg";
import cssLogo from "assets/images/icons/css-logo.svg";
import bulmaLogo from "assets/images/icons/bulma-logo.svg";
import linuxLogo from "assets/images/icons/tux-logo.png";
import gitLogo from "assets/images/icons/git-logo.svg";
import githubLogo from "assets/images/icons/github-logo.svg";
import herokuLogo from "assets/images/icons/heroku-logo.svg";
import awsLogo from "assets/images/icons/aws-logo.svg";
import gymPartnerImage from "assets/images/project-screenshots/gym-partner-logo-1000x505.png";
import privateEventsImage from "assets/images/project-screenshots/private-events-home-1000x503px.jpg";
import twlImage from "assets/images/project-screenshots/trikeworldltd-screenshot-1000x505.jpg";
import githubBannerIcon from "assets/images/banner-icons/GitHub-Mark-Light-120px-plus-scaled.png";
import linkedinBannerIcon from "assets/images/banner-icons/linkedin-dark-scaled.png";
import emailBannerIcon from "assets/images/banner-icons/email-logo-dark-scaled.png";

const aboutMe = [
  "I'm a self-taught developer, and I like making applications of different varieties. I like to use Rails and React when it comes to building web apps, and I've recently started to tinker with Android development using Kotlin.",
  "There's seldom a feeling like learning something new, and using that knowledge to make something work. I enjoy what I do because I get that feeling almost every day, in one way or another.",
  "If I've got free time to spare, I'll probably be weight lifting, slammin' keys on my piano, playing Kerbal Space Program, or taking my Hayabusa up into the mountains for a joyride.",
];

const booksAndCourses = [
  {
    id: 0,
    name: "The Odin Project",
    link: "https://www.theodinproject.com/",
  },
  {
    id: 1,
    name: "You Don't Know JS - Kyle Simpson",
    link: "https://github.com/getify/You-Dont-Know-JS",
  },
  {
    id: 2,
    name: "The Road to Learn React - Robin Wieruch",
    link: "https://roadtoreact.com/",
  },
  {
    id: 3,
    name: "Programming in Haskell - Graham Hutton",
    link:
      "https://books.google.com/books/about/Programming_in_Haskell.html?id=75C5DAAAQBAJ&source=kp_book_description",
  },
  {
    id: 4,
    name: "Practical Object-Oriented Design in Ruby - Sandi Metz",
    link: "https://www.poodr.com/",
  },
];

const tools = {
  backend: [
    {
      id: 0,
      name: "Ruby",
      logo: rubyLogo,
    },
    {
      id: 1,
      name: "Ruby on Rails",
      logo: railsLogo,
    },
    {
      id: 2,
      name: "RSpec + Minitest",
      logo: rspecLogo,
    },
    {
      id: 3,
      name: "PostgreSQL",
      logo: pgLogo,
    },
  ],
  frontend: [
    {
      id: 4,
      name: "JavaScript",
      logo: jsLogo,
    },
    {
      id: 5,
      name: "React",
      logo: reactLogo,
    },
    {
      id: 6,
      name: "HTML5",
      logo: htmlLogo,
    },
    {
      id: 7,
      name: "CSS",
      logo: cssLogo,
    },
    {
      id: 8,
      name: "Bulma",
      logo: bulmaLogo,
    },
  ],
  miscellaneous: [
    {
      id: 9,
      name: "Linux",
      logo: linuxLogo,
    },
    {
      id: 10,
      name: "Git",
      logo: gitLogo,
    },
    {
      id: 11,
      name: "Github",
      logo: githubLogo,
    },
    {
      id: 12,
      name: "Heroku",
      logo: herokuLogo,
    },
    {
      id: 13,
      name: "Amazon Web Services",
      logo: awsLogo,
    },
  ],
};

const projectInfo = [
  {
    id: 0,
    name: "Gym Partner",
    image: gymPartnerImage,
    paragraphs: [
      "Gym Partner is a cross-platform health and fitness application that allows users to plan exercise routines, set fitness goals, and track improvement over time. It involves the use of tech such as Rails 6, React, and Android with Kotlin. It's currently hosted using Amazon Web Services.",
      "This project is composed of three separate applications: A React single-page application, a native Android application, and a Rails REST API. The React and Android applications function as user interfaces for Gym Partner, and the Rails API functions as a back-end for both of these interfaces. The Rails app is designed to receive HTTP requests and data from both clients and respond with appropriately handled JSON data, and the communication between these applications creates a cohesive user experience.",
    ],
    websiteLink: "https://gympartner.app/",
    githubLink: "https://github.com/coped/gym-partner-api",
  },
  {
    id: 1,
    name: "Private Events",
    image: privateEventsImage,
    paragraphs: [
      "Private Events is a web application similar to Eventbrite. Users can create, attend, and send invitations for events. The app was created using Rails 6, Bulma CSS, and PostgreSQL.",
      "This application's database schema requires tables with many-to-many relationships, and uses has-many-through associations between Active Record models to represent these relationships. This project was a fun exploration of Rails's Active Record ORM framework, and provided a deeper look at the power and programming convenience Active Record can give back-end developers over bare-metal SQL.",
    ],
    websiteLink: "https://private-events-top-coped.herokuapp.com/",
    githubLink: "https://github.com/coped/private-events",
  },
  {
    id: 2,
    name: "Trike World Limited",
    image: twlImage,
    paragraphs: [
      "trikeworldltd.com (domain yet to transfer) is a fully responsive web application built for Trike World Ltd., my father’s V8 trike motorcycle business. The primary technologies involved in this project include Rails 6, the Bulma CSS framework, and PostgreSQL.",
      "The website features a custom authentication system and a blogging system, allowing my father to sign in and post pictures / updates about his latest projects with ease. The source code is also covered with comprehensive unit and integration tests using the Minitest framework.",
    ],
    websiteLink: "https://trikeworldlimited.herokuapp.com/",
    githubLink: "https://github.com/coped/trike-world-limited",
  },
];

const socialLinks = [
  {
    id: 0,
    image: githubBannerIcon,
    link: "https://github.com/coped",
    alt: "Link to github",
  },
  {
    id: 1,
    image: linkedinBannerIcon,
    link: "https://www.linkedin.com/in/dennis-cope",
    alt: "Link to linkedin",
  },
  {
    id: 2,
    image: emailBannerIcon,
    link: "mailto:dennisaaroncope@gmail.com",
    alt: "Mail to dennisaaroncope@gmail.coim",
  },
];

export { aboutMe, booksAndCourses, tools, projectInfo, socialLinks };
