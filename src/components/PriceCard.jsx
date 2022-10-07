import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin-right: 50px;
  padding: 20px;
  -webkit-box-shadow: 3px 3px 26px -3px rgba(0, 0, 0, 0.26);
  box-shadow: 3px 3px 26px -3px rgba(0, 0, 0, 0.26);
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (max-width: 480px) {
    margin-right: 0;
    margin-bottom: 10px;
    padding: 10px;
  }
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Price = styled.span`
  font-size: 50px;
  font-weight: bold;
  @media only screen and (max-width: 480px) {
    font-size: 30px;
  }
`;

const Type = styled.button`
  margin: 10px 0px;
  background-color: white;
  color: crimson;
  border-color: 1.5px solid crimson;
  border-radius: 20px;
  padding: 10px;
  @media only screen and (max-width: 480px) {
    display: none;
  }
`;

const List = styled.ul`
  list-style: none;
`;

const ListItem = styled.li`
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  margin: 30px 0;
  font-size: 12px;
  @media only screen and (max-width: 480px) {
    margin: 10px;
    font-size: 12px;
  }
`;

const Button = styled.button`
  background-color: darkblue;
  color: white;
  border-radius: 10px;
  font-size: 16px;
  font-weight: bold;
  padding: 15px;
  cursor: pointer;
  border: none;
  @media only screen and (max-width: 480px) {
    font-size: 12px;
    padding: 5px;
  }
`;

const PriceCard = ({price, type}) => {
  return (
    <>
      <Container>
        <PriceContainer>
          $<Price>{price}</Price>/month
        </PriceContainer>

        <Type>{type} Plan</Type>
        <List>
          <ListItem>200 Hand-Crafted Templates</ListItem>
          <ListItem>Exclusive support</ListItem>
          <ListItem>50+ PreBuilt Websites</ListItem>
          <ListItem>Premium Plugins</ListItem>
        </List>
        <Button>Join Now</Button>
      </Container>
    </>
  );
};

export default PriceCard;
