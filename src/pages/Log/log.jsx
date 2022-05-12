import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

//HELPERS
import {
  birthCalculatorYears,
  birthdayCalculator,
} from "../../helpers/birthday";

//COMPONENTS
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
          <article className="log">
            <p>Features removed, added &#38; improved.</p>
            <h6>2205</h6>
          </article>
          <article className="log">
            <p>Site stabilized. 140 commits!</p>
            <h6>2204</h6>
          </article>
          <article className="log">
            <p>Massive SCSS overhaul.</p>
            <h6>2203</h6>
          </article>
          <article className="log">
            <p>Explored backend tech with MERN.</p>
            <h6>2202</h6>
          </article>
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
          <article className="log">
            <p>Site refactored with React.js.</p>
            <h6>2112</h6>
          </article>
          <article className="log">
            <p>Went into vanilla Javascript.</p>
            <h6>2110</h6>
          </article>
          <article className="log">
            <p>Started learning HTML &#38; CSS.</p>
            <h6>2109</h6>
          </article>
          <article className="log">
            <p>
              I was born <b id="elapsed-days">{birthdayCalculator()}</b> days,
              or <b id="elapsed-years">{birthCalculatorYears()}</b> years, ago!
              🧙✨
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
                    <h2>
                      <Link to={`/blog/${post.page}`}>{post.title}</Link>
                    </h2>
                  </li>
                ))}
              <li key="imagination-key">
                <h2>
                  <Link to={`/blog/imagination`}>Imagination is the key</Link>
                </h2>
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
