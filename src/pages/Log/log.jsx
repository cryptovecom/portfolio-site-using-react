//HELPERS
import { durationCalcYears, durationCalc } from "../../helpers/durationCalc";

//COMPONENTS
import LogPost from "../../components/LogPost";
import ProgressBar from "../../components/ProgressBar";

export default function Blog() {
  return (
    <>
      <ProgressBar />
      <main>
        <section className="log__cards">
          <LogPost text="Features removed, added &#38; improved." date="2205" />
          <LogPost text="Site stabilized. 140 commits!" date="2204" />
          <LogPost text="Massive SCSS overhaul." date="2203" />
          <LogPost text="Explored backend tech with MERN." date="2202" />
          <article className="log">
            <p>
              Deployed to Netlify via&nbsp;
              <a
                href="https://github.com/iseneld"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
              .
            </p>
            <h6>2201</h6>
          </article>
          <LogPost text="Site refactored with React.js." date="2112" />
          <LogPost text="Went into vanilla Javascript." date="2110" />
          <LogPost text="Started learning HTML &#38; CSS." date="2109" />
          <article className="log">
            <p>
              Today is my <b id="elapsed-days">{durationCalc()}</b> day, or{" "}
              <b id="elapsed-years">{durationCalcYears()}</b> year! 🧙✨
            </p>
            <h6>FYI!</h6>
          </article>
        </section>
        <section>
          <div className="info">
            <h2>
              I'm on{" "}
              <a
                href="https://github.com/iseneld"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>{" "}
              🤖
            </h2>
          </div>
        </section>
      </main>
    </>
  );
}
