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
        <Section image={1} />
        <Section image={2} />
        <Section image={3} />
        <Section image={4} />
      </main>
    </>
  );
}
