import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

//HELPERS
import { durationCalcYears, durationCalc } from "../../helpers/durationCalc";

//COMPONENTS
import LogPost from "../../components/LogPost";
import ProgressBar from "../../components/ProgressBar";
import Section from "../../components/Section/Section";

export default function Blog() {
  const [posts, setPosts] = useState();

  useEffect(() => {
    fetch("./data/posts.json")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <>
      <ProgressBar />
      <main>
        <section className="log__cards">
          <LogPost text="Features removed, added &#38; improved." date="2205" />
          <LogPost text="Site stabilized. 140 commits!" date="2204" />
          <LogPost text="Massive SCSS overhaul." date="2203" />
          <LogPost text="Explored backend tech with MERN." date="2202" />
          <article className="log">
            <p>
              Deployed to Netlify via&nbsp;
              <a
                href="https://github.com/iseneld"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
              .
            </p>
            <h6>2201</h6>
          </article>
          <LogPost text="Site refactored with React.js." date="2112" />
          <LogPost text="Went into vanilla Javascript." date="2110" />
          <LogPost text="Started learning HTML &#38; CSS." date="2109" />
          <article className="log">
            <p>
              Today is my <b id="elapsed-days">{durationCalc()}</b> day, or{" "}
              <b id="elapsed-years">{durationCalcYears()}</b> year! 🧙✨
            </p>
            <h6>FYI!</h6>
          </article>
        </section>
        <section className="respond">
          <section className="banner banner__blog">
            <h1 className="dragon-text">Free will is an illusion</h1>
          </section>
          <section className="link-list">
            <ul>
              {/* LOOPING THROUGH POSTS IN JSON */}
              {posts &&
                posts.map((post) => (
                  <li key={post.id}>
                    <Link to={`/blog/${post.page}`}>
                      <h2>{post.title}</h2>
                      <span>{`>`}</span>
                    </Link>
                  </li>
                ))}
              <li key="hi-application">
                <Link to={`/blog/hi-application`}>
                  <h2>My application to Hyper Island</h2>
                  <span>{`>`}</span>
                </Link>
              </li>
              <li key="imagination-key">
                <Link to={`/blog/imagination`}>
                  <h2>Imagination is the key</h2>
                  <span>{`>`}</span>
                </Link>
              </li>
            </ul>
          </section>
        </section>
        <Section image="4" />
        <section>
          <div className="info">
            <h2>
              I'm on{" "}
              <a
                href="https://twitter.com/micheliseneld"
                target="_blank"
                rel="noreferrer"
              >
                Twitter
              </a>{" "}
              🐦
            </h2>
          </div>
        </section>
      </main>
    </>
  );
}
