
import welimg from "../images/lens-1418954.png"
import React from "react";
import { useNavigate } from "react-router-dom";
import "./css/welcomepage.css"

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
    <div className="welcomepage">
       <div className="image">
             <img src={welimg} alt="welcome"/>
        </div>
        <div class="second-section">
             <p className="p">10x Team 04</p>
             <button onClick={() => navigate("/posts")} className="button">Enter</button>
         </div>
         </div>

    </>
  );
};

export default Home;
