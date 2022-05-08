import React from "react";
import { Link } from "react-router-dom";
import "./page404.css";

export default function Page404() {
  return (
    <>
      <main>
        <section className="top__noborder flex">
          <section className="banner">
            <h1>404: Page not found 📉</h1>
            <h2>
              <Link to="/" id="link-404">
                Go back to start
              </Link>
            </h2>
          </section>
        </section>
      </main>
    </>
  );
}
