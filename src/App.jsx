import React from "react";
import styled, { css } from "styled-components";
import Features from "./components/Features";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Price from "./components/Price";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const Container = styled.div`
  height: 100vh;
  overflow: hidden;
  position: relative;
`;

const Shape = css`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
  z-index: -1;
`

const IntoShape = styled.div`
  ${Shape}
  clip-path: polygon(67% 0, 100% 0, 100% 100%, 55% 100%);
  background-color: crimson;
`;

const FeatureShape = styled.div`
  ${Shape}
  clip-path: polygon(0 0, 55% 0, 40% 100%, 0% 100%);
  background-color: pink;
`;

const ServicesShape = styled.div`
  ${Shape}
  clip-path: polygon(0 0, 40% 0, 40% 100%, 0% 100%);
  background-color: pink;
`;

const PriceShape = styled.div`
  ${Shape}
  clip-path: polygon(40% 0, 100% 0, 100% 100%, 70% 100%);
  background-color: crimson
`;

const App = () => {
  return (
    <>
      <Container>
        <Navbar />
        <Intro />
        <IntoShape />
      </Container>

      <Container>
        <Features />
        <FeatureShape />
      </Container> 

      <Container>
        <Services />
        <ServicesShape />
      </Container>

      <Container>
        <Price />
        <PriceShape />
      </Container>  

      <Container>
        <Contact />
        <Footer />
      </Container> 
    </>
  );
};

export default App;
