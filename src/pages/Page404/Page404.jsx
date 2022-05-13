import React from "react";
import { Link } from "react-router-dom";
import "./page404.css";

export default function Page404() {
  return (
    <>
      <main>
        <section>
          <div className="info">
            <h2>
              404: Page not found 📉{" "}
              <Link to="/" id="link-404">
                Go back to start
              </Link>
            </h2>
          </div>
        </section>
        <section
          className={`photo-section`}
          style={{
            backgroundImage: `url(/images//404.png)`,
            backgroundPosition: "top center",
          }}
        ></section>
      </main>
    </>
  );
}
