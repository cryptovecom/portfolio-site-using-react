import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

function Cake() {
  const [holidays, setHolidays] = useState();

  useEffect(() => {
    fetch("./data/holidays.json")
      .then((response) => response.json())
      .then((data) => setHolidays(data));
  }, []);

  // function createListItems(data, selected) {
  //   // Selected is true if ID is stored in localStorage.
  //   // Create list item, headers, button, container and paragraph.
  //   // Set unique IDs for button and list item.
  //   var li = document.createElement("li");
  //   var h2 = document.createElement("h2");
  //   var h3 = document.createElement("h3");
  //   var button = document.createElement("button");
  //   var div = document.createElement("div");
  //   button.setAttribute("id", `${data.id}`);
  //   li.setAttribute("id", `list-${data.id}`);
  //   var p = document.createElement("p");

  //   // Add styling to favourited items.
  //   if (selected) {
  //     li.classList.add("favourite_selection");
  //   }

  //   //
  //   if (data.id == 1) {
  //     // Append holiday name.
  //     h2.append(data.name);
  //     // Append countdown timer content.
  //     div.append(h3);
  //     // Append all elements of first card.
  //     li.append(h2, p, div);
  //     // Append holiday date.
  //     p.append(data.date);

  //     // Append main card to ordered list.
  //     document.querySelector("main ol").append(li);
  //     // Add header background image.
  //     document
  //       .querySelector("header")
  //       .setAttribute(
  //         "style",
  //         "background-image: url('../" + `${data.header}` + "');"
  //       );
  //   } else {
  //     // Create smaller countdown list items.
  //     h2.append(data.name);
  //     // button.innerHTML;
  //     div.append(h3, button);
  //     li.append(h2, div);

  //     document.querySelector("main ol").append(li);
  //   }
  // }

  // function printHolidays(data, i) {
  //   // Convert holiday date into time value.
  //   var countDownDate = new Date(data.date).getTime();

  //   var x = setInterval(function () {
  //     // Get today's date and time
  //     var now = new Date().getTime();

  //     // Calculate time difference between now and holiday.
  //     var distance = countDownDate - now;

  //     // Time calculations for days, hours, minutes and seconds
  //     var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  //     var hours = Math.floor(
  //       (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  //     );
  //     var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  //     var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  //     // Display countdown as "days" if more than 24h left.
  //     if (distance > 86400000) {
  //       document.querySelector(
  //         "main ol li:nth-child(" + `${data.id}` + ") h3"
  //       ).innerHTML = days + " days ";
  //     } else {
  //       // Show as hours:minutes:seconds if less than 24h.
  //       document.querySelector(
  //         "main ol li:nth-child(" + `${data.id}` + ") h3"
  //       ).innerHTML = hours + "h " + minutes + "m " + seconds + "s ";
  //     }

  //     // Show celebration text if the countdown is done.
  //     if (distance < 0) {
  //       clearInterval(x);
  //       document.querySelector("ol li:first-child").innerHTML =
  //         // Celebration text:
  //         "Yay! Today's the day!";
  //     }

  //     if (i == 0) {
  //       document.querySelector("ol li:first-child h3").innerHTML =
  //         "<center>" +
  //         days +
  //         " days | " +
  //         hours +
  //         " : " +
  //         minutes +
  //         " : " +
  //         seconds;

  //       if (distance < 86400000) {
  //         document.querySelector("ol li:first-child h3").innerHTML =
  //           hours + " : " + minutes + " : " + seconds;
  //       }

  //       // Adds "0" in front of integers when below 10.
  //       // Author unknown, hehe.
  //       // Should be possible to do with a single function, rather than six.
  //       if (hours < 10) {
  //         document.querySelector("ol li:first-child h3").innerHTML =
  //           "<center>" +
  //           days +
  //           " days | " +
  //           "0" +
  //           hours +
  //           " : " +
  //           minutes +
  //           " : " +
  //           seconds;
  //       }

  //       if (minutes < 10) {
  //         document.querySelector("ol li:first-child h3").innerHTML =
  //           "<center>" +
  //           days +
  //           " days | " +
  //           hours +
  //           " : " +
  //           "0" +
  //           minutes +
  //           " : " +
  //           seconds;
  //       }

  //       if (seconds < 10) {
  //         document.querySelector("ol li:first-child h3").innerHTML =
  //           "<center>" +
  //           days +
  //           " days | " +
  //           hours +
  //           " : " +
  //           minutes +
  //           " : " +
  //           "0" +
  //           seconds;
  //       }

  //       if (hours < 10 && seconds < 10) {
  //         document.querySelector("ol li:first-child h3").innerHTML =
  //           "<center>" +
  //           days +
  //           " days | " +
  //           "0" +
  //           hours +
  //           " : " +
  //           minutes +
  //           " : " +
  //           "0" +
  //           seconds;
  //       }

  //       if (hours < 10 && minutes < 10) {
  //         document.querySelector("ol li:first-child h3").innerHTML =
  //           "<center>" +
  //           days +
  //           " days | " +
  //           "0" +
  //           hours +
  //           " : " +
  //           "0" +
  //           minutes +
  //           " : " +
  //           seconds;
  //       }

  //       if (minutes < 10 && seconds < 10) {
  //         document.querySelector("ol li:first-child h3").innerHTML =
  //           "<center>" +
  //           days +
  //           " days | " +
  //           hours +
  //           " : " +
  //           "0" +
  //           minutes +
  //           " : " +
  //           "0" +
  //           seconds;
  //       }
  //     }
  //   }, 1000);

  //   // Add classes to main card.
  //   document
  //     .querySelector("ol li:first-child")
  //     .setAttribute("class", "main__card");
  // }

  // function getHolidays() {
  //   // Runs on load.
  //   // Fetches holiday objects.
  //   fetch("../data/holidays.json")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       for (let i = 0; i < 5; i++) {
  //         if (!localStorage.length == 0) {
  //           var selected = localStorage.getItem("favourites").includes(i + 1);
  //         }
  //         // Render list items with the first five objects.
  //         createListItems(data[i], selected);
  //         // Calculate countdown timer value.
  //         printHolidays(data[i], i);
  //       }
  //       favouritesActive();
  //     });
  // }

  // Create localStorage

  // function favouritesActive() {
  //   const buttons = document.querySelectorAll("button");

  //   // Check if there's a favorite list
  //   // if not: set it to be an empty array

  //   let favourites = JSON.parse(localStorage.getItem("favourites")) || [];

  //   buttons.forEach((button) => {
  //     button.addEventListener("click", () => {
  //       //Check if button has the class selected
  //       //if so: remove class
  //       //and: remove from local storage

  //       var id = this.event.target.getAttribute("id");

  //       document
  //         .getElementById(`list-${id}`)
  //         .classList.toggle("favourite_selection");

  //       if (!favourites.includes(button.id)) {
  //         favourites[button.id] = button.id;
  //         localStorage.setItem("favourites", JSON.stringify(favourites));
  //       } else {
  //         delete favourites[button.id];
  //         localStorage.setItem("favourites", JSON.stringify(favourites));
  //       }
  //     });
  //   });
  // }

  holidays && console.log(holidays);

  return (
    <>
      <Header />
      <main>
        <section className="blog__banner">
          <h1 className="dragon-text">Celebrate</h1>
        </section>

        <section className="landing-list"></section>

        <aside>
          <h6>WORK IN PROGRESS</h6>
        </aside>
      </main>
      <Footer />
    </>
  );
}

export default Cake;
