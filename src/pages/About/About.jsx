// COMPONENTS
import Banner from "../../components/Banner";
import NavLink from "../../components/NavLink";
import Section from "../../components/Section";

// HELPERS
import { durationCalc } from "../../helpers/durationCalc";
// import { durationCalcYears, durationCalc } from "../../helpers/durationCalc";

export default function Me(props) {
  return (
    <>
      <main>
        <section>
          <div className="info">
            <h2>
              I was born <b id="elapsed-days">{durationCalc()}</b> days ago.
              {/* That's <b id="elapsed-years">{durationCalcYears()}</b> years! 🧙✨ */}
            </h2>
          </div>
        </section>

        <Banner text="Now, I'm an independent entrepreneur, software designer, photographer, writer, retired sommelier, music producer, performer, sound design educator, mixing and recording audio engineer with a passion for the imagination, communication, and sensory exploration." />
        <Banner text="I'm currently studying frontend development at Hyper Island." />
        <Section page="me" image="odin" text="" height={80} />
        <Banner text="I'm fascinated by the truth of things." />
        <Section page="me" image="ljus" height={79} />
        <Banner text="To me, art is a science of the mind." />
        <Banner text="Through creativity, we reshape reality with our dreams." />
        <Section page="me" image="tooweirdtolive" height={79} />
        <section>
          <div className="info">
            <h2>
              Statistically, I have
              {` ~` + (81.69 * 365 - durationCalc()).toFixed(0) + ` days left.`}
            </h2>
          </div>
        </section>
        <Banner text="I'm making them count." />
        <section>
          <div className="info">
            <a
              className="github-contributions"
              href="https://github.com/iseneld"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://ghchart.rshah.org/iseneld"
                alt="My github contributions over the last year"
              />
            </a>
          </div>
        </section>
        <Section page="me" image="edh" text="" height={80} />
        <Banner text="... mostly by playing EDH! 🧙‍♂️✨" />

        <Banner
          text="Find me online:"
          stylez={{
            backgroundColor: "var(--color-blood)",
            color: "var(--color-white)",
          }}
        />
        <nav className="link-list">
          <ul style={{ borderTop: "1rem solid var(--color-dark)" }}>
            <NavLink text="Archidekt" url="https://archidekt.com/user/130955" />
            <NavLink
              text="Codewars"
              url="https://www.codewars.com/users/iseneld"
            />
            <NavLink
              text="Facebook"
              url="https://www.facebook.com/micheliseneld/"
            />
            <NavLink text="Github" url="https://github.com/iseneld" />
            <NavLink
              text="Goodreads"
              url="https://www.goodreads.com/user/show/15854773-michel-iseneld"
            />
            <NavLink
              text="Instagram"
              url="https://www.instagram.com/micheliseneld/"
            />
            <NavLink
              text="Linkedin"
              url="https://www.linkedin.com/in/micheliseneld/"
            />
            <NavLink
              text="Modulargrid"
              url="https://www.modulargrid.net/e/users/view/157916"
            />
            <NavLink
              text="Patreon"
              url="https://www.patreon.com/micheliseneld"
            />
            <NavLink text="Twitter" url="https://twitter.com/micheliseneld" />
            <NavLink
              text="Untappd"
              url="https://untappd.com/user/Enteogenisk"
            />
            <NavLink
              text="Vivino"
              url="https://www.vivino.com/users/micheliseneld"
            />
            <NavLink text="🧠" to="/words" />
          </ul>
        </nav>
        <Section page="me" image="beard" height={89} />
      </main>
    </>
  );
}
