"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import styled from 'styled-components';
const StyledGradientBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: linear-gradient(to tr, from-sky-500, via-blue-700, to-blue-950);
  clip-path: polygon(100% 0, 100% 50%, 50% 100%, 0 50%, 0 0); // Creates a large triangle shape
  z-index: -1; // Ensure it's behind the content
`;

const StyledTitleContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  position: relative;
  min-height: 100vh; // Full height
  overflow: hidden; // Ensures nothing spills out

  @media (max-width: 1022px) {
    padding: 3rem 1rem; // Further increase padding for very small devices
  }
`;
const StyledTitle = styled(motion.p)`
  font-size: 9rem; // Starting font size
  line-height: 10rem; // Starting line height
  overflow: hidden;
  width: 100%;
  margin: 0; // Reset margin

  // Reduce font size and line height on smaller screens

  @media (max-width: 670px) {
    font-size: 5rem; // Even smaller font size for very small devices
    line-height: 5rem;
    overflow: visible;
    text-align: center;
    color: black;
    padding: 0;
      z-index: 99999 !important;
  }
`;


const StyledSubtitle = styled(motion.p)`
  font-size: 1.25rem; // Subtitle font size
  text-transform: none; // Override any global styles
  margin: 1rem 0; // Spacing around the subtitle

  @media (max-width: 1022px) {
    font-size: 1.2rem;
    text-align: center;
    margin: 1.5rem 0; // Increase space around the subtitle
  }
`;

const StyledButton = styled(motion.button)`
  background: linear-gradient(to br, #0ea5e9, #3b82f6, #6366f1);
  color: #3b82f6;
  padding: 1rem 2rem; // Padding around the button text
  border-radius: 0.5rem; // Rounded corners
  font-size: 1rem; // Button font size
  border: none; // No border
  cursor: pointer; // Change cursor on hover
  display: inline-block; // Ensure the button is not display: none
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3); // Add some shadow for depth
  transition: all 0.3s ease-in-out;

  &:hover {
    background: linear-gradient(to br, #3b82f6, #6366f1, #7c3aed);
    box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.45); // Increase shadow on hover
  }
    

  @media (max-width: 1022px) {
    padding: 0.6rem 1.2rem;
    font-size: 1rem; // Further reduce font size
    color: black;
  }
`;



export default function TitleAndShit() {
  // Component JSX using the styled components
  return (
    
    <StyledTitleContainer>
      <StyledGradientBackground />
      <StyledTitle
        initial={{ y: '10rem', opacity: 0 }}
        animate={{ y: '0rem', opacity: 1 }}
        transition={{ duration: 1.8, delay: 0, ease: "anticipate" }}
        className='font-extrabold text-transparent bg-clip-text bg-left-top [background-image:url("/text-background-a2ce454e.png");] bg-gradient-to-tl from-sky-500 via-blue-500 to-blue-950'
      >
        Upup
      </StyledTitle>
      <StyledTitle
        initial={{ y: '10rem', opacity: 0 }}
        animate={{ y: '0rem', opacity: 1 }}
        transition={{ duration: 1.8, delay: 0.2, ease: "anticipate" }}
        className=' pl-40 font-extrabold text-transparent bg-clip-text bg-left-top [background-image:url("/text-background-a2ce454e.png");] bg-gradient-to-tl from-sky-500 via-blue-500 to-blue-950'
        
      >
        and
      </StyledTitle>
      <StyledTitle
        initial={{ y: '10rem', opacity: 0 }}
        animate={{ y: '0rem', opacity: 1 }}
        transition={{ duration: 1.8, delay: 0.3, ease: "anticipate" }}
        className=' pl-60 font-extrabold text-transparent bg-clip-text bg-left-top [background-image:url("/text-background-a2ce454e.png");] bg-gradient-to-tl from-sky-500 via-blue-500 to-blue-950'
      >
        Away
      </StyledTitle>
      <StyledSubtitle
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.7 }}
        className="text-xl font-normal mt-12 -ml-24"
      >
        The most powerful open source file uploader for your react project
      </StyledSubtitle>
      <Link href="/demo" passHref>
      <StyledButton whileHover={{ scale: 1.05 }}>
        Try it now!
      </StyledButton>
    </Link>    
    </StyledTitleContainer>
  );
}
