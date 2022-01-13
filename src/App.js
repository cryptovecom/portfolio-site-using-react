import Header from "./components/Header";
import Main from "./components/Main";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import listItems from "./data/landingList";

function App() {
  return (
    <>
      <Header />
      {/* <Main menu={listItems} /> */}
      <Blog />
      <Footer />
    </>
  );
}

export default App;
