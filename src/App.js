import "./App.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import listItems from "./JSON";

function App() {
  return (
    <div className="App">
      <Header />
      <Main menu={listItems} />
      <Footer />
    </div>
  );
}

export default App;
