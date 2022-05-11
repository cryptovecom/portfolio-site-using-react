import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  birthCalculatorYears,
  birthdayCalculator,
} from "../../helpers/birthday";
import ProgressBar from "../../components/ProgressBar";

// BLOG FUNCTION

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
        <section className="blog__cards">
          <article className="log">
            <p>A lot changed.</p>
            <h6>2205</h6>
          </article>
          <article className="log">
            <p>Content revised and expanded.</p>
            <h6>2204</h6>
          </article>
          <article className="log">
            <p>SCSS cleaned up and restructured.</p>
            <h6>2203</h6>
          </article>
          <article className="log">
            <p>MERN-stack added to explore JS backend tech.</p>
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
            <p>Refactored with React.js.</p>
            <h6>2112</h6>
          </article>
          <article className="log">
            <p>Created as my first school project.</p>
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
        <section className="photo-4"></section>
      </main>
    </>
  );
}
