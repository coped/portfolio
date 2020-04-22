import rubyLogo from 'assets/images/icons/ruby-logo.svg';
import railsLogo from 'assets/images/icons/rails-logo.svg';
import rspecLogo from 'assets/images/icons/rspec-logo.svg';
import pgLogo from 'assets/images/icons/pg-logo.svg';
import jsLogo from 'assets/images/icons/javascript-logo.svg';
import reactLogo from 'assets/images/icons/react-logo.svg';
import htmlLogo from 'assets/images/icons/html-logo.svg';
import cssLogo from 'assets/images/icons/css-logo.svg';
import bulmaLogo from 'assets/images/icons/bulma-logo.svg';
import linuxLogo from 'assets/images/icons/tux-logo.png';
import gitLogo from 'assets/images/icons/git-logo.svg';
import githubLogo from 'assets/images/icons/github-logo.svg';
import herokuLogo from 'assets/images/icons/heroku-logo.svg';
import awsLogo from 'assets/images/icons/aws-logo.svg';
import gymPartnerImage from 'assets/images/project-screenshots/gym-partner-logo-1000x505.png';
import privateEventsImage from 'assets/images/project-screenshots/private-events-home-1000x503px.jpg'
import twlImage from 'assets/images/project-screenshots/trikeworldltd-screenshot-1000x505.jpg'

const Content = (() => {
    const aboutMe = [
        "I'm a self-taught developer, and I like making applications of different varieties. I like to use Rails and React when it comes to building web apps, and I've recently started to tinker with Android development using Kotlin.",
        "There's seldom a feeling like learning something new, and using that knowledge to make something work. I enjoy what I do because I get that feeling almost every day, in one way or another.",
        "If I've got free time to spare, I'll probably be weight lifting, slammin' keys on my piano, playing Kerbal Space Program, or taking my Hayabusa up into the mountains for a joyride."
    ]

    const booksCourses = [
        {
            name: "The Odin Project",
            link: "https://www.theodinproject.com/"
        },
        {
            name: "You Don't Know JS - Kyle Simpson",
            link: "https://github.com/getify/You-Dont-Know-JS"
        },
        {
            name: "The Road to Learn React - Robin Wieruch",
            link: "https://roadtoreact.com/"
        },
        {
            name: "Programming in Haskell - Graham Hutton",
            link: "https://books.google.com/books/about/Programming_in_Haskell.html?id=75C5DAAAQBAJ&source=kp_book_description"
        },
        {
            name: "Practical Object-Oriented Design in Ruby - Sandi Metz",
            link: "https://www.poodr.com/"
        }
    ]

    const tools = {
        backend: [
            {
                name: "Ruby",
                logo: rubyLogo
            },
            {
                name: "Ruby on Rails",
                logo: railsLogo
            },
            {
                name: "RSpec + Minitest",
                logo: rspecLogo
            },
            {
                name: "PostgreSQL",
                logo: pgLogo
            }
        ],
        frontend: [
            {
                name: "JavaScript",
                logo: jsLogo
            },
            {
                name: "React",
                logo: reactLogo
            },
            {
                name: "HTML5",
                logo: htmlLogo
            },
            {
                name: "CSS",
                logo: cssLogo
            },
            {
                name: "Bulma",
                logo: bulmaLogo
            }
        ],
        miscellaneous: [
            {
                name: "Linux",
                logo: linuxLogo
            },
            {
                name: "Git",
                logo: gitLogo
            },
            {
                name: "Github",
                logo: githubLogo
            },
            {
                name: "Heroku",
                logo: herokuLogo
            },
            {
                name: "Amazon Web Services",
                logo: awsLogo
            }
        ]
    }

    const projects = [
        {
            keyID: 0,
            name: "Gym Partner",
            image: gymPartnerImage,
            paragraphs: [
                "Gym Partner is a cross-platform health and fitness application that allows users to plan exercise routines, set fitness goals, and track improvement over time. It involves the use of tech such as Rails 6, React, and Android with Kotlin. It's currently hosted on Heroku and Netlify.",
                "This project is composed of three separate applications: A React web client, a native Android client, and a Rails REST API. The API functions as a back-end for the overall Gym Partner project, and its purpose is to provide an interface for the React and Android applications to communicate with, and provide access to the resources of the REST API (user data, exercise data, etc.)."
            ],
            websiteLink: "https://gympartner.app/",
            githubLink: "https://github.com/coped/gym-partner-api"
        },
        {
            keyID: 1,
            name: "Private Events",
            image: privateEventsImage,
            paragraphs: [
                "Private Events is a web application similar to Eventbrite. Users can create, attend, and send invitations for events. The app was created using Rails 6, Bulma CSS, and PostgreSQL.",
                "This application's database schema requires tables with many-to-many relationships, and uses has-many-through associations between Active Record models to represent these relationships. This project was a fun exploration of Rails's Active Record ORM framework, and provided a deeper look at the power and programming convenience Active Record can give back-end developers over bare-metal SQL."
            ],
            websiteLink: "https://private-events-top-coped.herokuapp.com/",
            githubLink: "https://github.com/coped/private-events"
        },
        {
            keyID: 2,
            name: "Trike World Limited",
            image: twlImage,
            paragraphs: [
                "trikeworldltd.com (domain yet to transfer) is a fully responsive web application built for Trike World Ltd., my father’s V8 trike motorcycle business. The primary technologies involved in this project include Rails 6, the Bulma CSS framework, and PostgreSQL.",
                "The website features a custom authentication system and a blogging system, allowing my father to sign in and post pictures / updates about his latest projects with ease. The source code is also covered with comprehensive unit and integration tests using the Minitest framework."
            ],
            websiteLink: "https://trikeworldlimited.herokuapp.com/",
            githubLink: "https://github.com/coped/trike-world-limited"
        }
    ]

    return {aboutMe, booksCourses, tools, projects}
})();

export default Content
