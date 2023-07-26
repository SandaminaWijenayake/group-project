import React from "react";
import "./coverpage.css";
import { useWindowSize } from "@react-hook/window-size";

import Confetti from "react-confetti";
import { useNavigate } from "react-router-dom";

const CoverPage = () => {
  const [width, height] = useWindowSize();
  const navigate = useNavigate();
  return (
    <div className="cover-page">
      <Confetti wind={-0.1} width={width} height={height} />
      <div className="animation">
        <h1 class="line-1 anim-typewriter"> Where Two Hearts Become One</h1>
      </div>
      <div className="button-container">
        <button
          className="signup-button"
          onClick={() => {
            navigate("/signup");
          }}
        >
          Sign Up
        </button>
        <button
          className="signin-button"
          onClick={() => {
            navigate("/Login");
          }}
        >
          Sign In
        </button>
      </div>
    </div>
  );
};

export default CoverPage;
