import { Link } from "react-router-dom";

// COMPONENTS
import Banner from "../../components/Banner";
import ProgressBar from "../../components/ProgressBar";
import Section from "../../components/Section";

export default function Music(props) {
  return (
    <>
      <ProgressBar />
      <main>
        <section className="link-list">
          <ul>
            <li>
              <Link to="/music" className={`landing-list school-project`}>
                <h2>Aether Mechanics</h2>
              </Link>
            </li>
            <li>
              <Link to="/music" className={`landing-list school-project`}>
                <h2>Ntogn</h2>
              </Link>
            </li>
            <li>
              <Link to="/music" className={`landing-list school-project`}>
                <h2>Aedi Records</h2>
              </Link>
            </li>
            <li>
              <Link to="/music" className={`landing-list school-project`}>
                <h2>Hypnus Records</h2>
              </Link>
            </li>
            <li>
              <Link to="/music" className={`landing-list school-project`}>
                <h2>Kabalion Records</h2>
              </Link>
            </li>
          </ul>
        </section>
        <Section image={1} text="Ntogn" />
        <Section image={2} text="Aether Mechanics" />
        <Section image={3} text="Hypnus Records" />
        <Section image={4} text="Kabalion" />
        <Banner text="Under construction 🚧" />
      </main>
    </>
  );
}
