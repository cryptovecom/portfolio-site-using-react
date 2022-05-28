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
          text="Read slowly."
          stylez={{
            backgroundColor: "var(--color-blood)",
            color: "var(--color-white)",
          }}
        />
        <Banner text="You are not experiencing. You are the experience." />
        {/* <Banner text="Sanity is a matter of degree." /> */}
        <Banner text="The best way to predict the future is to create it." />
        <Banner text="Negativity is easy. Optimism is creative." />
        <Banner
          text="Slowly."
          stylez={{
            backgroundColor: "var(--color-yellow)",
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
                  blob="3 MIN"
                />
                <NavLink
                  text="Imagination is the key"
                  to="/blog/imagination"
                  blob="3 MIN"
                />
              </ul>
            </nav>
          </section>
        </section>
        <Section image="4" />
        <section>
          <div className="info">
            <h2>
              I'm on{" "}
              <a
                href="https://twitter.com/micheliseneld"
                target="_blank"
                rel="noreferrer"
              >
                Twitter
              </a>{" "}
              🐦
            </h2>
          </div>
        </section>
      </main>
    </>
  );
}
