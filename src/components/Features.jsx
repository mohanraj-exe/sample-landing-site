import React from "react";
import styled from "styled-components";
import mobileApp from "../img/mobile-app-1.png";
import AnimatedShapes from "./AnimatedShapes";

const Container = styled.div`
  display: flex;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
    padding: 30px 20px;
  }
`;
const Image = styled.img`
  width: 80%;
`;

const Left = styled.div`
  width: 50%;
  align-items: center;
  margin-top: 70px;
  @media only screen and (max-width: 480px) {
    display: none;
  }
`;

const Right = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 70px;
  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;

const Title = styled.span`
  font-size: 70px;
  @media only screen and (max-width: 480px) {
    font-size: 50px;
  }
`;

const SubTitle = styled.span`
  font-style: italic;
  margin-top: 30px;
  font-size: 24px;
  color: #333;
`;

const Desc = styled.p`
  color: #777;
  width: 85%;
  font-size: 20px;
  margin-top: 30px;
`;

const Button = styled.button`
  width: 150px;
  font-size: 20px;
  padding: 15px 20px;
  background-color: darkblue;
  border-radius: 20px;
  border: none;
  color: white;
  cursor: pointer;
  margin-top: 20px;
`;

const Features = () => {
  return (
    <Container>
      <Left>
        <Image src={mobileApp}></Image>
      </Left>

      <Right>
        <Title>
          <strong>good </strong>design <br /> <strong>good</strong> business
        </Title>
        <SubTitle>We know that good design means good business</SubTitle>
        <Desc>
          We help our clients succeed by creating brand identities, digital
          experiences and print materials that communicate clearly, acheive
          marketing goals and look fantastic.
          <br />
          <br />
          We care your business and guarantee you to acheive marketing goals.
        </Desc>
        <Button>Learn More</Button>
      </Right>

      <AnimatedShapes />
    </Container>
  );
};

export default Features;
