// SOFTWARE
import React from "react";
import { Routes, Route } from "react-router-dom";

// COMPONENTS
import DarkMode from "./components/DarkMode";
import Header from "./components/Header";
import Footer from "./components/Footer";

// PAGES
import Home from "./pages/Home";
import Log from "./pages/Log";
import BlogPost from "./pages/BlogPost";
import Goals from "./components/Goals";
import Me from "./pages/Me";
import Music from "./pages/Music";
import AetherMechanics from "./pages/Music/AetherMechanics";
import HypnusRecords from "./pages/Music/HypnusRecords";
import Ntogn from "./pages/Music/Ntogn";
import TheMemoir from "./pages/Music/TheMemoir";
import Page404 from "./pages/Page404";
import Photo from "./pages/Photo";
import Streaming from "./pages/Streaming";
import Words from "./pages/Words";

// BLOG POSTS
import HiApplication from "./pages/BlogPost/HiApplication";
import Imagination from "./pages/BlogPost/Imagination";

function App() {
  console.log(
    "%cEverything is a lesson if you are willing to learn.",
    "background-color: #ffb532 ; color: #1e1e1e ; font-weight: bold ; padding: 4px ; border-radius: 8px ; margin: 8px ; padding: 8px ;"
  );

  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/log" element={<Log />} />
        <Route path="/blog/:post" element={<BlogPost />} />
        <Route path="/me" element={<Me />} />
        <Route path="/music" element={<Music />} />
        <Route path="/music/aethermechanics" element={<AetherMechanics />} />
        <Route path="/music/hypnusrecords" element={<HypnusRecords />} />
        <Route path="/music/ntogn" element={<Ntogn />} />
        <Route path="/music/thememoir" element={<TheMemoir />} />
        <Route path="/goals" element={<Goals />} />
        <Route path="/photo" element={<Photo />} />
        <Route path="/streaming" element={<Streaming />} />
        <Route path="/words" element={<Words />} />
        <Route path="*" element={<Page404 />} />

        {/* BLOG POSTS */}
        <Route path="/blog/imagination" element={<Imagination />} />
        <Route path="/blog/hi-application" element={<HiApplication />} />
      </Routes>
      <DarkMode />
      <Footer />
    </>
  );
}

export default App;
