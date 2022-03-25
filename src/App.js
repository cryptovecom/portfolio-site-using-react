import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Streaming from "./components/Streaming";
import Blog from "./components/Blog";
import Page404 from "./components/Page404";
import Cake from "./components/Cake";
import Sandbox from "./components/Sandbox";
import BlogPost from "./components/BlogPost";
import linkList from "./components/linkList";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Main linkList={linkList} />} />
        <Route exact path="/streaming" element={<Streaming />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:post" element={<BlogPost />} />
        <Route path="/cake" element={<Cake />} />
        <Route path="/sandbox" element={<Sandbox />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
