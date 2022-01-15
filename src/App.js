import Header from "./components/Header";
import Main from "./components/Main";
import Blog from "./components/Blog";
import BlogPost from "./components/BlogPost";
import Footer from "./components/Footer";
import listItems from "./components/landingList";

function App() {
  return (
    <>
      <Header />
      <Main menu={listItems} />
      {/* <Blog /> */}
      {/* <BlogPost /> */}
      <Footer />
    </>
  );
}

export default App;
