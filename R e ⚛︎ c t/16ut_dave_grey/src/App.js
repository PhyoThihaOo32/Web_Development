import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import Home from "./Home";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import About from "./About";
import Missing from "./Missing";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/post" element={<NewPost />}></Route>
        <Route path="/post/:id" element={<PostPage />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="*" element={<Missing />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
