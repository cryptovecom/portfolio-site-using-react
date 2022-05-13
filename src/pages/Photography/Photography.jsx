import ProgressBar from "../../components/ProgressBar";

// COMPONENTS
import Banner from "../../components/Banner";
import Section from "../../components/Section";

export default function Photography(props) {
  return (
    <>
      <ProgressBar />
      <main>
        <Section page="photo" image={19} text="Ocular presence." />
        <Banner text="See through my eyes:" />
        <Section page="photo" image={20} />
        <Section page="photo" image={15} />
        <Section page="photo" image={14} />
        {/* <Section page="photo" image={21} /> */}
        <Section page="photo" image={2} />
        <Section page="photo" image={"6__rotated"} />
        <Section page="photo" image={22} />
        <Section page="photo" image={3} />
        <Section page="photo" image={4} />
        <Section page="photo" image={7} />
        <Section page="photo" image={8} />
        <Section page="photo" image={11} />
        <Section page="photo" image={12} />
        <Section page="photo" image={5} />
        <Section page="photo" image={9} />
        <Banner text="Canon 6D Mk. II" />
        <Banner text="Canon EF 35/2.0 USM" />
        <Banner text="Canon EF 100/2.8 IS USM " />
        <Section page="photo" image={13} />
        <section>
          <div className="info">
            <h2>
              Follow me on{" "}
              <a
                href="https://www.instagram.com/micheliseneld/"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>{" "}
              🖖
            </h2>
          </div>
        </section>
      </main>
    </>
  );
}
