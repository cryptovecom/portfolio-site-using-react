//COMPONENTS
import Banner from "../../components/Banner";
import NavLink from "../../components/NavLink";
import ProgressBar from "../../components/ProgressBar";
import Section from "../../components/Section/Section";

export default function Words() {
  return (
    <>
      <ProgressBar />
      <main>
        <Banner
          text="Read slow."
          stylez={{
            backgroundColor: "var(--color-blood)",
            color: "var(--color-white)",
          }}
        />
        {/* <Banner text="Sanity is a matter of degree." /> */}
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
                  blob="BLOG: 3 MIN"
                />
                <NavLink
                  text="Imagination is the key"
                  to="/blog/imagination"
                  blob="BLOG: 3 MIN"
                />
              </ul>
            </nav>
          </section>
        </section>
        <Banner text="You're not experiencing. You are the experience." />
        <Banner text="Creativity brings order to chaos." />
        <Banner text="Innovation happens at the speed of trust." />
        <Banner text="Iteration outperforms design." />
        <Banner text="The surest way to predict the future is to create it." />
        <Banner text="Consistency compounds." />
        <Banner text="Take risks." />
        <Banner
          text="Fail fast."
          stylez={{
            backgroundColor: "var(--color-grey)",
          }}
        />
        <Section image="4" height={79} />
        <Banner text="There is no free will. We do not control, we react." />
        <Banner text="Natural does not mean good." />
        <Banner text="Nature is an answer. Science is the question." />
        <Banner text="Reality is meaningless. Meaning arises from the mind." />
        <Banner text="Chosen suffering creates meaning. Sacrifice." />
        <Banner text="Honor is a virtue." />
      </main>
    </>
  );
}
