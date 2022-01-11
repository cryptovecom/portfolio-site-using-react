import "./App.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import listItems from "./JSON";

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
