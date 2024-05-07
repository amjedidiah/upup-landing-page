"use client";

import React from "react";
import styled, { keyframes } from "styled-components";
import AnimatedShapes from "./AnimatedShapes";

const takeoff = keyframes`
  0% {
    transform: translateY(0) scale(1);
  }
  100% {
    transform: translateY(-20px) scale(0.95);
  }
`;

const Container = styled.div`
  height: calc(100vh - 50px);
  display: flex;
  padding: 20px;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

const Left = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 480px) {
    width: 100%;
    height: 100%;
  }
`;

const Title = styled.h1`
  width: 60%;
  font-size: 70px;
  font-weight: 700;
  color: #333;
  font-family: poppins;
  @media only screen and (max-width: 480px) {
    width: 100%;
    font-size: 50px;
  }
`;

const Desc = styled.p`
  width: 60%;
  font-size: 24px;
  margin-top: 20px;
  color: #555;
  font-family: poppins;
  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;

const Info = styled.div`
  width: 60%;
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: poppins;
  @media only screen and (max-width: 480px) {
    width: 100%;
    flex-direction: column;
  }
`;

const Button = styled.button`
  padding: 20px 40px;
  background-color: #007bff;
  color: white;
  border-radius: 20px;
  font-weight: bold;
  border: none;
  letter-spacing: 1px;
  font-family: poppins;
  cursor: pointer;
  font-size: 18px;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
    background-color: #0056b3;
  }

  @media only screen and (max-width: 480px) {
    margin-bottom: 20px;
    width: 80%;
  }
`;

const Right = styled.div`
  width: 40%;
  position: relative;
  padding-top: 75px;
  @media only screen and (max-width: 480px) {
    display: none;
  }
`;

const Image = styled.img`
  padding-left: 33%;
  width: 40%;
  position: absolute;
  animation: ${takeoff} 1.5s ease-in-out infinite alternate;
`;

const BaseImage = styled.img`
  width: 100%;
  position: absolute;
  bottom: -2%;
  left: 50%;
  transform: translate(-50%, 0);
  padding-top: 20px;
`;

const Intro = () => {
  return (
    <Container>
      <Left>
        <Title>Up, Up, and Away!</Title>
        <Desc>The most powerful file uploader for your React project.</Desc>
        <Info>
          <Button>Try it now</Button>
        </Info>
      </Left>
      <Right>
        <BaseImage src="/rocket.png" alt="Rocket Base" />
        <Image src="/woman.png" alt="Rocket" />
      </Right>
      <AnimatedShapes />
    </Container>
  );
};

export default Intro;