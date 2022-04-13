import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function BlogPost() {
  function darkMode(e) {
    e.preventDefault(); // Added to prevent page reload on click.
    document.querySelector("body").classList.toggle("dark-mode");
  }

  const [post, setPost] = useState();
  const match = useParams();

  useEffect(() => {
    fetch("../data/posts.json")
      .then((response) => response.json())
      .then((data) => {
        return data.filter((x) => x.page === match.post);
      })
      .then((end) => setPost(end));
  }, [match.post]);

  return (
    <>
      <main>
        <section className="top__noborder">
          <section className="banner">
            <button className="dark-mode-button" onClick={darkMode}>
              Dark Mode
            </button>
          </section>
          <section>
            <article className="blog-post">
              {post && (
                <>
                  <h2>{post[0].title}</h2>
                  <h5>{post[0].fullSummary}</h5>
                  <section
                    dangerouslySetInnerHTML={{ __html: post[0].content }}
                  ></section>
                  <p>
                    <Link to="/blog">Back to blog page</Link>
                  </p>
                </>
              )}
            </article>
          </section>
        </section>
      </main>
    </>
  );
}
