import Header from "./components/Header";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Post from "./components/Post";
import Error from "./components/Error";
import ContetSection from "./components/ContetSection";
import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("/posts");
      setPosts(response.data);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <div className="content__section">
                <div className="container">
                  <ContetSection posts={posts} main />
                </div>
              </div>
            </>
          }
        />
        <Route
          path="post/:id"
          element={
            <div className="content__section">
              <div className="container">
                <div className="posts">
                  <Post posts={posts} />
                </div>
                <ContetSection posts={posts} main={false} />
              </div>
            </div>
          }
        />
        <Route path="*" element={<Error />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
