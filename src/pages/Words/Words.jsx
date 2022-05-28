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
        <Banner text="You are not experiencing. You are the experience." />
        <Banner text="The best way to predict the future is to create it." />
        <Banner text="Negativity is easy. Optimism is creative." />
        <Banner text="Innovation can only happen at the speed of trust." />
        <Banner text="Iteration outperforms design." />
        <Banner
          text="Fail fast."
          stylez={{
            backgroundColor: "var(--color-grey)",
          }}
        />
        <Section image="4" height={79} />
        <Banner
          text="This page is under construction 🚧"
          stylez={{ backgroundColor: "var(--color-yellow)" }}
        />
      </main>
    </>
  );
}
