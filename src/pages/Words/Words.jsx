//COMPONENTS
import Banner from "../../components/Banner";
import NavLink from "../../components/NavLink";
import ProgressBar from "../../components/ProgressBar";
import Section from "../../components/Section/Section";

import { durationCalcYears } from "../../helpers/durationCalc";

export default function Words() {
  return (
    <>
      <ProgressBar />
      <main>
        <section>
          <div className="info">
            <h2>
              Here are condensed insights from{" "}
              {durationCalcYears("January 11, 2011 12:40:00 GMT", 2)} years of
              journaling.
            </h2>
          </div>
        </section>
        <Banner text="Each line has at some point changed my life." />
        <Section image={13} height={49} />
        <Banner
          text="Slow down."
          stylez={{
            backgroundColor: "var(--color-blood)",
            color: "var(--color-white)",
          }}
        />
        <Banner text="If you want something quickly, you're easier to manipulate." />
        <Banner text="Understand compounding." />
        <Banner text="Iteration outperforms design." />
        <Banner text="Being wrong means you've grown." />
        <Banner text="Progress is propelled by problems. " />
        <Banner text="All mistakes can be good, if you learn." />
        <Banner text="The surest way to predict the future is to create it." />
        <Banner text="Innovation happens at the speed of trust." />
        <Banner text="No risk, no story." />
        <Banner text="Thrive in volatility." />
        <Banner
          text="Fail fast."
          stylez={{
            backgroundColor: "var(--color-blood)",
            color: "var(--color-white)",
          }}
        />
        <Section image="4" height={79} />
        <Banner
          text="Read slow."
          stylez={{
            backgroundColor: "var(--color-blood)",
            color: "var(--color-white)",
          }}
        />
        <Banner text="To understand your mind, observe it." />
        <Banner text="You are an illusion of yourself." />
        <Banner text="Identify with your ignorance." />
        <Banner text="There is no free will." />
        <Banner text="You do not control, you react." />
        <Banner text="Pain and pleasure steers us." />
        <Banner text="You're not experiencing. You are the experience." />
        <Banner text="Life is meaningless. That is an opportunity." />
        <Banner text="Sacrifice creates meaning." />
        <Banner text="Choose what to suffer for." />
        <Section image="16" height={69} />
        <Banner text="The universe is an answer to scientific questions." />
        <Banner text="Nature does not care about ideas." />
        <Banner text="Ideas makes us human." />
        {/* <Banner text="Imagination is the miracle." /> */}
        {/* <Banner text="Nature does not care about our hopes and dreams. It wants to eat us." /> */}
        <Banner text="Meaning arises only from the mind." />
        <Section image="15" height={69} />
        <Banner text="Focus is a source of happiness." />
        <Banner text="Attention is psychedelic." />
        <Banner text="Consciousness is a controlled hallucination." />
        <Banner text="The difference between genius and insanity is measured in success." />
        <Banner text="Sanity is a matter of degree." />
        <Banner
          text="Do you understand what I am trying to tell you?"
          stylez={{
            backgroundColor: "var(--color-blood)",
            color: "var(--color-white)",
          }}
        />
        <Section page="me" image="floor-1" height={79} />
        <Banner text="Consciousness is energy experiencing itself." />
        <Banner text="By energy, I mean the scientific kind that powers everything." />
        <Banner text="That means my body is made of the same stuff as my imagination." />
        <Section page="me" image="floor-2" height={79} />
        <Banner text="Imagination then shapes reality through creative action." />
        <Banner text="Our dreams reshape the world." />
        <Banner text="Mystics call it alchemy." />
        <Section page="me" image="floor-3" height={79} />
        <Banner text="The ground beneath me connects to the entire planet. I'm a leaf on a tree. A conscious flame, dancing infernally across the surface of the sun." />
        <Section page="me" image="floor-4" height={79} />
        <Banner text="That's why we don't die, you see. Rather, the swan song that is our conscious experience fades into silence as we merge with the rest of this burning orb while the ripples of our deeds continues to reverberate like the wind of a butterfly." />
        <section className="respond">
          <section className="banner banner__blog">
            <h1 className="dragon-text">Free will is an illusion</h1>
          </section>
          <section className="link-list">
            <nav>
              <ul>
                <NavLink
                  text="Imagination is the key"
                  to="/blog/imagination"
                  blob="3 MIN READ"
                />
                <NavLink
                  text="My application to Hyper Island"
                  to="/blog/hi-application"
                  blob="3 MIN READ"
                />
              </ul>
            </nav>
          </section>
        </section>
        <nav className="link-list">
          <ul style={{ borderTop: "1rem solid var(--color-dark)" }}>
            <NavLink text="See" to="/photo" />
            <NavLink text="Hear" to="/music" />
          </ul>
        </nav>
      </main>
    </>
  );
}
