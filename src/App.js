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
import Page404 from "./pages/Page404";
import Sandbox from "./pages/Sandbox";
import Streaming from "./pages/Streaming";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home linkList={linkList} />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:post" element={<BlogPost />} />
        <Route path="/goals" element={<Goals />} />
        <Route path="/sandbox" element={<Sandbox />} />
        <Route path="/streaming" element={<Streaming />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
