import React from "react";
import Main from "./components/Main";
import Blog from "./components/Blog";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BlogPost from "./components/BlogPost";
import listItems from "./components/landingList";

export function MainPage() {
  return (
    <>
      <Main />
    </>
  );
}

export function BlogPage() {
  return (
    <>
      <Blog />
    </>
  );
}
