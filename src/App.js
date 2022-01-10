import "./App.css";
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";

const listItems = [
  {
    title: "Hypnus Records",
    url: "https://hypnusrecords.com/",
    img: "../images/hypnus.jpg",
  },
  {
    title: "Max for Live",
    url: "https://hypnusrecords.com/shop",
    img: "../images/slink.jpg",
  },
  {
    title: "The Memoir",
    url: "https://soundcloud.com/hypnus-memoirs",
    img: "../images/thememoir.jpg",
  },
  {
    title: "Aether Mechanics",
    url: "https://aethermechanics.bandcamp.com/",
    img: "../images/aethermechanics.jpg",
  },
  {
    title: "Ntogn",
    url: "https://tomerecords.bandcamp.com/",
    img: "../images/ntogn.jpg",
  },
  {
    title: "Photography",
    url: "https://www.instagram.com/micheliseneld/",
    img: "../images/photography.jpg",
  },
  {
    title: "Aedi Records",
    url: "https://aedirecords.bandcamp.com/",
    img: "../images/aedi.jpg",
  },
  {
    title: "Kabalion Records",
    url: "https://kabalion.bandcamp.com/",
    img: "../images/kabalion.jpg",
  },
];

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
