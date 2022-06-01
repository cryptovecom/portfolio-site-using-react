//COMPONENTS
import Banner from "../../components/Banner";
import NavLink from "../../components/NavLink";
import ProgressBar from "../../components/ProgressBar";
import Section from "../../components/Section/Section";
import ToTop from "../../components/ToTop";

export default function Words() {
  return (
    <>
      <ProgressBar />
      <main>
        <Banner
          text="Slow down."
          stylez={{
            backgroundColor: "var(--color-blood)",
            color: "var(--color-white)",
          }}
        />
        {/* <Banner text="Creativity brings order to chaos." /> */}
        <Banner text="The surest way to predict the future is to create it." />
        <Banner text="Innovation happens at the speed of trust." />
        <Banner text="If you want something quickly, you're easier to manipulate." />
        <Banner text="Consistency compounds." />
        <Banner text="Iteration outperforms design." />
        <Banner text="Progress is propelled by problems. " />
        <Banner text="Being wrong means you've grown." />
        <Banner text="All mistakes can be good mistakes, if you learn." />
        <Banner text="Thrive in volatility." />
        <Banner text="No risk, no story." />
        <Banner
          text="Fail fast."
          stylez={{
            backgroundColor: "var(--color-grey)",
          }}
        />
        <Section image="4" height={89} />
        <Banner
          text="Read slowly."
          stylez={{
            backgroundColor: "var(--color-blood)",
            color: "var(--color-white)",
          }}
        />
        <Banner text="To understand your mind, observe it." />
        <Banner text="You are an illusion of yourself." />
        <Banner text="Identify with your ignorance." />
        <Banner text="Knowledge is limited. Ignorance is boundless." />
        {/* <Banner text="Determinism cures hatred." /> */}
        <Banner text="There is no free will." />
        <Banner text="We do not control, we react." />
        <Banner text="Pain and pleasure steers us." />
        <Banner text="You're not experiencing. You are the experience." />
        <Banner text="Life is meaningless. This is not a problem, it's an opportunity." />
        <Banner text="Sacrifice creates meaning." />
        <Banner text="Choose what to suffer for." />
        {/* <Banner text="Honor is an underrated virtue." /> */}
        {/* <Banner text="Make promises and keep them." /> */}
        <Banner text="Imagine, then create." />
        <Banner text="Imagination makes us human." />
        {/* <Banner text="Everything we hold dear sprouts from our imagination." /> */}
        {/* <Banner text="Imagination is the miracle." /> */}
        <Banner text="Nature does not care about our hopes and dreams. It wants to eat us." />
        <Banner text="The universe is an answer to scientific questions." />
        <Banner text="Consciousness is a controlled hallucination." />
        <Banner text="Attention is psychedelic." />
        <Banner text="Am I authentic or insane?" />
        <Banner text="We adapt to function." />
        <Banner text="The difference between genius and insanity is measured in success." />
        <Banner text="Sanity is a matter of degree." />
        <Banner
          text="Do you understand what I am trying to tell you?"
          stylez={{
            backgroundColor: "var(--color-blood)",
            color: "var(--color-white)",
          }}
        />
        <section className="respond">
          <section className="banner banner__blog">
            <h1 className="dragon-text">Free will is an illusion</h1>
          </section>
          <section className="link-list">
            <nav>
              <ul>
                <NavLink
                  text="My application to Hyper Island"
                  to="/blog/hi-application"
                  blob="3 MIN READ"
                />
                <NavLink
                  text="Imagination is the key"
                  to="/blog/imagination"
                  blob="3 MIN READ"
                />
              </ul>
            </nav>
          </section>
        </section>
        <nav className="link-list">
          <ul style={{ borderTop: "1rem solid var(--color-dark)" }}>
            <NavLink text="Go back" to="/about" />
          </ul>
        </nav>
      </main>
    </>
  );
}
