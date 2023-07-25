import React from 'react';
import './coverpage.css';
import { useWindowSize } from '@react-hook/window-size';

import Confetti from 'react-confetti';

const CoverPage = () => {
  const [width, height] = useWindowSize();
  return (
    <div className="cover-page">
      <Confetti wind={-0.1} width={width} height={height} />
      <h1 class="line-1 anim-typewriter"> Where Two Hearts Become One</h1>
      <div className="button-container">
        <button className="signup-button">Sign Up</button>
        <button className="signin-button">Sign In</button>
      </div>
    </div>
  );
};

export default CoverPage;
