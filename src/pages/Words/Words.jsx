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
        <section className="respond">
          <section className="banner banner__blog">
            <h1 className="dragon-text">Free will is an illusion</h1>
          </section>
          <section className="link-list">
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
            <Banner text="I'll gather more thoughts here soon." />
            <Banner text="Meanwhile; take some risks." />
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
