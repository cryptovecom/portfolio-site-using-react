import ProgressBar from "../../components/ProgressBar";

// COMPONENTS
import Banner from "../../components/Banner";
import Section from "../../components/Section";

export default function Photography(props) {
  return (
    <>
      <ProgressBar />
      <main>
        <Banner text="More photos coming soon 🚧" />
        <Section page="photo" image={1} />
        <Section page="photo" image={2} />
        <Section page="photo" image={3} />
        <Section page="photo" image={4} />
      </main>
    </>
  );
}
