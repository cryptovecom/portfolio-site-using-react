import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
        <section className="top__noborder">
          <section className="banner banner__blog">
            <h1 className="dragon-text">Free will is an illusion</h1>
          </section>
          <section className="link-list">
            <ul>
              {/* LOOPING THROUGH POSTS IN JSON */}
              {posts &&
                posts.map((post) => (
                  <li
                    key={post.id}
                    style={{
                      backgroundImage: `url(${post.previewImage})`,
                    }}
                  >
                    <h2>
                      <Link to={`/blog/${post.page}`}>{post.title}</Link>
                    </h2>
                  </li>
                ))}
            </ul>
          </section>
        </section>
        <section className="blog__cards top">
          <aside className="card">
            <h6>APR 2022</h6>
            <p>
              CSS has been cleaned up and made a big mess again. Probably worse than before.
            </p>
          </aside>
          <aside className="card">
            <h6>MAR 2022</h6>
            <p>
              Adding MERN-stack structure to explore Javascript backend
              technologies.
            </p>
          </aside>
          <aside className="card">
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
          </aside>
          <aside className="card">
            <h6>SEP 2021</h6>
            <p>
              This is a dummy site made as my very first school project to
              practice HTML, CSS and Javascript.
            </p>
          </aside>
        </section>
        <section className="photo-4">
        </section>
      </main>
    </>
  );
}
