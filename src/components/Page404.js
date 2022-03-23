import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function Page404() {
  return (
    <>
      <Header />
      <main>
        <section className="landing__top">
          <section className="landing__banner">
            <h1>404</h1>
          </section>
          <section className="landing-list">
            <section>
              <h1>This page is not available</h1>
            </section>
          </section>
        </section>
        <section className="landing__second"></section>
        <Footer />
      </main>
    </>
  );
}

export default Page404;
