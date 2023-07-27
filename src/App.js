import React from "react";
import Home from "./screen/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Register from "./screen/Register";
import Book from "./screen/Book";
import Blog from "./component/Blog";
import Video from "./screen/Video";
import Login from "./screen/Login";
import Otp from "./screen/Otp";
import About from "./screen/About";
// import Card from "./component/Card";

const App = (props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/ebook" element={<Book />} />
        <Route exact path="/blog" element={<Blog />} />
        <Route exact path="/video" element={<Video />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/otp" element={<Otp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
