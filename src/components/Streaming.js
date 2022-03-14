import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

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

// BLOG FUNCTION

function Streaming() {
  return (
    <>
      <Header />
      <main>
        <section className="landing__top">
          <section className="streaming__banner">
            <h1 className="dragon-text">Favorites</h1>
          </section>
          <section className="landing-list">
            <h1>Streaming</h1>
          </section>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Streaming;
