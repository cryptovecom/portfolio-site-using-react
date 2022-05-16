import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ProgressBar from "../../components/ProgressBar";

export default function BlogPost() {
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
      <ProgressBar />
      <main>
        <section>
          <section className="banner"></section>
          <section className="blog-post">
            <article className="blog-post">
              {post && (
                <div>
                  <h2>{post[0].title}</h2>
                  <h5>{post[0].fullSummary}</h5>
                  <div
                    dangerouslySetInnerHTML={{ __html: post[0].content }}
                  ></div>
                  <p>
                    <Link to="/log">Back to blog page</Link>
                  </p>
                </div>
              )}
            </article>
          </section>
        </section>
      </main>
    </>
  );
}
