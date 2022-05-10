// SOFTWARE
import React from "react";
import { Routes, Route } from "react-router-dom";

// COMPONENTS
import Header from "./components/Header";
import Footer from "./components/Footer";
import linkList from "./components/linkList";

// PAGES
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Goals from "./components/Goals";
import Nvm from "./pages/Nvm";
import Page404 from "./pages/Page404";
import Photography from "./pages/Photography";
import Streaming from "./pages/Streaming";

// BLOG POSTS
import Imagination from "./pages/BlogPost/Imagination";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home linkList={linkList} />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:post" element={<BlogPost />} />
        <Route path="/nvm" element={<Nvm />} />
        <Route path="/goals" element={<Goals />} />
        <Route path="/photography" element={<Photography />} />
        <Route path="/streaming" element={<Streaming />} />
        <Route path="*" element={<Page404 />} />

        {/* BLOG POSTS */}
        <Route path="/blog/imagination" element={<Imagination />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
