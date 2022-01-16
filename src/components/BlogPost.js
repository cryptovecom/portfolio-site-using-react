import Header from "./Header";
import Footer from "./Footer";

// ORIGINAL POST RENDER FUNCTION
// I so far find this easier to read.
// Sequential order of execution.

function createPost(post) {
  let h2 = document.createElement("h2");
  let h5 = document.createElement("h5");

  h2.innerHTML = post.title;
  h5.innerHTML = post.fullSummary;

  let blogSection = document.querySelector(".blog__post");

  blogSection.append(h2);
  blogSection.append(h5);

  let content = post.content;
  for (let i = 0; i < content.length; i++) {
    blogSection.innerHTML += content[i];
  }

  let backLink = `
    <p>
      <a href="./blog.html">Back to blog page</a>
    </p>
  `;

  blogSection.innerHTML += backLink;
}

// function findQuery(param) {
//   var urlParams = new URLSearchParams(window.location.search, param);
//   return urlParams.get(param);
// }

function getPostFromId() {
  // var id = JSON.parse(findQuery("id")); // Funcion call >>

  // 3 is a placeholder.
  // It should get the post id dynamically.
  let id = 3;

  console.log("Fetch starts");
  fetch("./data/posts.json")
    .then((response) => response.json())
    .then((data) => {
      console.log("Loop through response");
      for (let i = 0; i < data.length; i++) {
        if (data[i].id === id) {
          createPost(data[i]); // Funcion call >>
        }
      }
    });
}

function darkMode(e) {
  e.preventDefault(); // Added to prevent page reload on click.
  console.log("Dark Mode");
  document.querySelector("body").classList.toggle("dark-mode");
}

// REACT PART

function BlogPost() {
  return (
    <>
      <Header />
      <main>
        <section className="landing__banner">
          <button onClick={darkMode}>Dark Mode</button>
        </section>
        <section className="blog__post">{getPostFromId()}</section>
      </main>
      <Footer />
    </>
  );
}

export default BlogPost;
