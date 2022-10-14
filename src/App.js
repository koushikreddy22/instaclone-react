import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/welcomepage";
import Posts from "./components/posts";
import Create from "./components/create";


const App = () => {
  return (
    <div >
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/create"  element={<Create/>}/>
          
        </Routes>
      </Router>
    </div>
  );
};

export default App;