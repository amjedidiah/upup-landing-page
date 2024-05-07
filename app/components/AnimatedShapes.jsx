"use client";

import React from "react";
import styled, { keyframes } from "styled-components";

// Adjusted animation keyframes
const move1 = keyframes`
  0% { transform: translate(0, 0); }
  100% { transform: translate(100vw, 100vh); }
`;

const move2 = keyframes`
  0% { transform: translate(0, 0); }
  100% { transform: translate(100vw, -100vh); }
`;

const move3 = keyframes`
  0% { transform: translate(0, 0); }
  100% { transform: translate(100vw, -50vh); }
`;

const Cloud = styled.div`
  background-size: contain;
  background-repeat: no-repeat;
  opacity: 0.7;
  position: absolute;
  z-index: -1;
`;

const Cloud1Shape = styled(Cloud)`
  width: 120px;
  height: 80px;
  background-image: url('/cloud1.png'); // Adjusted path
  animation: ${move1} 25s linear alternate infinite;
  top: -60px; left: -60px;
`;

const Cloud2Shape = styled(Cloud)`
  width: 150px;
  height: 100px;
  background-image: url('/cloud2.png'); // Adjusted path
  animation: ${move2} 25s linear alternate infinite;
  top: 200px; left: -100px;
`;

const Cloud3Shape = styled(Cloud)`
  width: 130px;
  height: 90px;
  background-image: url('/cloud3.png'); // Adjusted path
  animation: ${move3} 25s linear alternate infinite;
  top: 400px; left: -50px;
`;

const AnimatedShapes = () => {
  return (
    <>
      <Cloud1Shape />
      <Cloud2Shape />
      <Cloud3Shape />
    </>
  );
};

export default AnimatedShapes;
