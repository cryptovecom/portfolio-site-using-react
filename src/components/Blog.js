import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

// BLOG FUNCTION

function Blog() {
  const [posts, setPosts] = useState();

  useEffect(() => {
    fetch("./data/posts.json")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <>
      <Header />
      <main>
        <section className="landing__top">
          <section className="blog__banner">
            <h1 className="dragon-text">Free will is an illusion</h1>
          </section>
          <section className="landing-list">
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
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Blog;
