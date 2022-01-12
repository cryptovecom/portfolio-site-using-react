import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import listItems from "./components/JSON";

function App() {
  return (
    <>
      <Header />
      <Main menu={listItems} />
      <Footer />
    </>
  );
}

export default App;
