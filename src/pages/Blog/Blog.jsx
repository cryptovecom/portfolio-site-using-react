import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { birthCalculatorYears, birthdayCalculator } from "../../helpers/birthday";

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
      <main>
        <section>
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
        <section className="blog__cards">
          <article className="card flex">
            <h6>APR 2022</h6>
            <p>
              The site's content was revised into a more proper portfolio. This
              blog is still jibberish and the list of stuff to add is long.
            </p>
          </article>
          <article className="card flex">
            <h6>MAR 2022</h6>
            <p>
              CSS has been cleaned up and made a big mess again. Then cleaned
              up, again.
            </p>
          </article>
          <article className="card flex">
            <h6>FEB 2022</h6>
            <p>
              Adding MERN-stack structure to explore Javascript backend
              technologies.
            </p>
          </article>
          <article className="card flex">
            <h6>JAN 2022</h6>
            <p>
              The site was refactored using React.js and published to Netlify
              via&nbsp;
              <a
                href="https://github.com/iseneld"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
              .
            </p>
          </article>
          <article className="card flex">
            <h6>SEP 2021</h6>
            <p>
              This was originally a dummy site made as my first school project
              to practice HTML, CSS and Javascript.
            </p>
          </article>
          <article className="card">
            <h6>BIRTHDAY WIZARD</h6>
            <p>
              Today it's been <b id="elapsed-days">{birthdayCalculator()}</b>{" "}
              days since I was born. <br />
              That's <b id="elapsed-years">{birthCalculatorYears()}</b> years!
              🧙✨
            </p>
          </article>
        </section>
        <section className="photo-4"></section>
      </main>
    </>
  );
}
