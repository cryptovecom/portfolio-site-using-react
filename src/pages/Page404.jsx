import React from "react";
import { Link } from "react-router-dom";

export default function Page404() {
  return (
    <>
      <main>
        <section className="top">
          <section className="banner">
            <h1>404</h1>
            <h2>
              <Link to="/">Go back to start</Link>
            </h2>
          </section>
          <section className="link-list">
            <section>
              <h1>This page is not available</h1>
            </section>
          </section>
        </section>
      </main>
    </>
  );
}
