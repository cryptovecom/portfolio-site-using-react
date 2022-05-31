// COMPONENTS
import Banner from "../../components/Banner";
import NavLink from "../../components/NavLink";
import Section from "../../components/Section";

// HELPERS
// import { durationCalcYears, durationCalc } from "../../helpers/durationCalc";

export default function Me(props) {
  return (
    <>
      <main>
        <Banner text="Who am I?" />
        <Section page="me" image="odin" text="" height={80} />
        <Banner text="I am not sure." />
        <Section page="me" image="ljus" height={79} />
        {/* <section>
          <div className="info">
            <h2>
              I was born <b id="elapsed-days">{durationCalc()}</b> days ago.
              That's <b id="elapsed-years">{durationCalcYears()}</b> years! 🧙✨
            </h2>
          </div>
        </section> */}
        <Banner text="Consciousness is energy experiencing itself." />
        <Banner text="By energy, I mean the scientific kind that powers everything." />
        <Banner text="That means my body is made of the same stuff as my dreams." />
        {/* <Banner text="I am a swirling mist able to dream about what doesn't exist, yet the dreams exist vividly in my mind made of the same energy as matter." /> */}
        <Section page="me" image="floor-1" height={79} />
        <Banner text="Imagination then shapes reality through creative action." />
        <Banner text="Our dreams reshape the world." />
        <Banner text="Mystics call it alchemy." />
        <Section page="me" image="floor-2" height={79} />
        <Banner text="As the ground beneath me connects to the entire planet." />
        <Banner text="I flap around like a leaf on a tree." />
        <Banner text="A flame, dancing infernally across the surface of the sun." />
        <Section page="me" image="floor-3" height={79} />
        <Banner text="That's why we don't die, you see. Rather, the swan song that is our conscious experience fades into silence as we merge with the rest of this burning orb while the ripples of our deeds continues to reverberate like the wind of a butterfly." />
        <Section page="me" image="floor-4" height={79} />
        <Banner
          text="'Let there be links!', and there were links:"
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
        <Banner text="An idea is a dream." />
        <Banner text="A dream with a date is a goal." />
        <Banner text="A goal in steps is a plan." />
        <Banner text="A plan put to action becomes reality." />
      </main>
    </>
  );
}
