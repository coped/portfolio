import { ReactElement } from "react";
import portraitOfMe from "assets/images/me-256x256.jpg";
import { aboutMe, booksAndCourses } from "lib/content";

export default function About(): ReactElement {
  return (
    <div className="columns center">
      <div className="column is-8">
        <div className="columns">
          <div className="column center is-5">
            <figure className="image is-256x256">
              <img
                src={portraitOfMe}
                className="is-rounded"
                alt="Dennis Cope"
              />
            </figure>
          </div>
          <div className="column is-7">
            {aboutMe.map((paragraph, index) => (
              <p key={index} className="paragraph">
                {paragraph}
              </p>
            ))}
            <p className="paragraph">
              Here are some books and courses I&apos;m currently learning from:
            </p>
            {booksAndCourses.map((item) => (
              <p key={item.id}>
                <a href={item.link}>{item.name}</a>
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
