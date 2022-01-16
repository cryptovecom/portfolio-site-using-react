function getThumbnails() {
  console.log("Fetch starts");
  fetch("./data/posts.json")
    .then((response) => response.json())
    .then((data) => {
      console.log("Parse data. Why does this run twice?");
      for (let i = 0; i < data.length; ++i) {
        createThumbnail(data[i]); // Funcion call >>
        console.log("Test: " + i);
      }
    });
}

function createThumbnail(post) {
  let thumbnail = `
    <article>
      <a href="../pages/blog-post.html?id=${post.id}">
        <img src="${post.previewImage}" alt="A randomly generated image" />
        <div>
          <h2>${post.title}</h2>
        </div>
        <p>${post.shortSummary}</p>
      </a>
    </article>
    `;
  return (document.querySelector(".blog__thumbnails").innerHTML += thumbnail);
  // return thumbnail;
}

// BLOG FUNCTION

function Blog() {
  console.log("Blog function starts");
  return (
    <main>
      <section className="blog__banner">
        <h1 className="dragon-text">
          <span className="blog-animation">A </span>
          <span className="blog-animation">
            resp
            <wbr />
            onsive
          </span>
          <span className="blog-animation"> exercise</span>
        </h1>
        <h3>
          Adapting with grid, flexbox and custom properties updated by media
          queries!
        </h3>
      </section>
      <section className="blog__thumbnails">{getThumbnails()}</section>
      <aside>
        <p>
          A grid is nesting flexboxes, that's nesting a grid with another
          flexbox inside to practice advanced responsive layouts.
        </p>
        <p>
          I've struggled making the thumbnail images sizing properly in all
          window configurations.
        </p>
        <p>
          Ideally, I'd like the image to stretch the full height of the
          container, use the same width as height, and have the other blocks
          resize accordingly.
        </p>
      </aside>
      <aside id="since-born">
        <p>
          Today it's been <b id="elapsed-days"></b> days since I was born.{" "}
          <br />
          That's <b id="elapsed-years"></b> years! 🧙✨
        </p>
      </aside>
    </main>
  );
}

export default Blog;
