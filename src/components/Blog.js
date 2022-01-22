import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

// VANILLA BIRTHDAY CALCULATOR

// function birthdayCalculators() {
//   let birth = "October 20, 1988 04:40:00 GMT";
//   let born = new Date(birth);
//   let now = new Date();
//   let elapsed = now - born;

//   var daysSinceBorn = Math.floor(elapsed / (1000 * 3600 * 24));

//   function birthdayCalculator() {
//     document.querySelector("#elapsed-days").innerHTML = daysSinceBorn;
//   }

//   function birthCalculatorYears() {
//     let yearsSinceBorn = parseFloat(daysSinceBorn / 365).toFixed(2);

//     document.querySelector("#elapsed-years").innerHTML = yearsSinceBorn;
//   }

//   birthdayCalculator();
//   birthCalculatorYears();
// }

function birthdayCalculator() {
  let birth = "October 20, 1988 04:40:00 GMT";
  let born = new Date(birth);
  let now = new Date();
  let elapsed = now - born;

  var daysSinceBorn = Math.floor(elapsed / (1000 * 3600 * 24));

  return daysSinceBorn;
}

function birthCalculatorYears() {
  let years = birthdayCalculator();

  return parseFloat(years / 365).toFixed(2);
}

// function getThumbnails() {
//   fetch("./data/posts.json")
//     .then((response) => response.json())
//     .then((data) => {
//       for (let i = 0; i < data.length; ++i) {
//         createThumbnail(data[i]); // Funcion call >>
//       }
//     });
// }

// function createThumbnail(post) {
//   let thumbnail = `
//     <article>
//       <a href="../pages/blog-post.html?id=${post.id}">
//         <img src="${post.previewImage}" alt="A randomly generated image" />
//         <div>
//           <h2>${post.title}</h2>
//         </div>
//         <p>${post.shortSummary}</p>
//       </a>
//     </article>
//     `;
//   return (document.querySelector(".blog__thumbnails").innerHTML += thumbnail);
// }

// BLOG FUNCTION

function Blog() {
  const [posts, setPosts] = useState();

  useEffect(() => {
    fetch("./data/posts.json")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Header />
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
        </section>

        {/* <section className="blog__thumbnails">
          {posts &&
            posts.map((post) => (
              <article key={post.id}>
                <a href={`/blog-post`}>
                  <img src={post.previewImage} alt="Randomly generated" />
                  <div>
                    <h2>{post.title}</h2>
                    <p>{post.shortSummary}</p>
                  </div>
                </a>
              </article>
            ))}
        </section> */}

        <section className="landing-list">
          <ul>
            {posts &&
              posts.map((post) => (
                <li
                  // className={`blog__thumbnails`}
                  key={post.id} // KEY PROP ADDED HERE!
                  style={{
                    backgroundImage: `url(${post.previewImage})`,
                  }}
                >
                  <h2>
                    <Link to="/blog-post">{post.title}</Link>
                  </h2>
                  {/* <p>{post.shortSummary}</p> */}
                </li>
              ))}
          </ul>
        </section>

        <aside>
          <p>
            This is a dummy site made as my first school project to practice
            HTML, CSS, Javascript and http requests.
          </p>
          <p>
            It was later refactored using React.js and published to Netlify via
            Github.
          </p>
        </aside>
        <aside id="since-born">
          <p>
            Today it's been <b id="elapsed-days">{birthdayCalculator()}</b> days
            since I was born. <br />
            That's <b id="elapsed-years">{birthCalculatorYears()}</b> years!
            🧙✨
          </p>
        </aside>
      </main>
      <Footer />
    </>
  );
}

export default Blog;
