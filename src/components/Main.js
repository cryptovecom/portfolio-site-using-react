function Main(props) {
  // VANILLA CODE:

  // This HTML was originally hardcoded into the website's index.html.

  // function landingList(x) {
  //   document.querySelector("main").append(newSection);
  //   newSection.className = "landing-list";
  //   newSection.append(newUl);
  //   for (let i = 0; i < x.length; i++) {
  //     newUl.innerHTML += `
  //     <li class="landing-list__hypnus" style="background-image: url(${x[i].img});">
  //       <h2>
  //         <a href="${x[i].url}" target="_blank">
  //           ${x[i].title}
  //         </a>
  //       </h2>
  //     </li>`;
  //   }
  // }

  // (1) Maps over the menu item array of objects,
  // (2) adds an id,
  // (3) used as key prop further down.

  // Originally, the div.michel was created like this.

  // function michelPortrait() {
  //   const newDiv = document.createElement("div");

  //   newDiv.classList.add("michel");
  //   return document.querySelector(".landing-list").prepend(newDiv);
  // }

  const listItemsObjects = props.menu.map((object, i) => {
    object.id = i;
    return object;
  });

  return (
    <main>
      <section className="landing__banner">
        <h1>I have here refactored my first school project using React.js.</h1>
      </section>
      <section className="landing-list">
        <div className="michel"></div>
        <ul>
          {listItemsObjects.map((x) => (
            <li
              className={`landing-list`}
              key={x.id} // KEY PROP ADDED HERE!
              style={{
                backgroundImage: `url(./images/${x.img})`,
              }}
            >
              <h2>
                <a href={x.url} target="_blank" rel="noreferrer">
                  {x.title}
                </a>
              </h2>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
