import React from "react";
import "./page404.css";

export default function Page404() {
  return (
    <>
      <main>
        <section>
          <div className="info">
            <h2>404: Page not found 📉</h2>
          </div>
        </section>
        <section
          className={`photo-section`}
          style={{
            backgroundImage: `url(/images//404.jpg)`,
            backgroundPosition: "top center",
          }}
        ></section>
      </main>
    </>
  );
}
