import React from 'react'
import styled from "styled-components";

const Container = styled.div`
  height: 50px;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.span`
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Logo = styled.div`
    font-size: 25px;
    font-weight: bold;
    text-decoration: underline crimson;
`;

const Menu = styled.ul`
    display: flex;
    list-style: none;
    @media only screen and (max-width: 480px) {
      display: none;
    }
`;

const MenuItem = styled.li`
    margin-right: 30px;
    font-size: 18px;
    font-weight: bold;
    color: grey;
`

const Right = styled.button`
    border: 2px solid white;
    padding: 10px 15px;
    font-weight: bold;
    background-color: crimson;
    color: white;
    border-radius: 10px;
    cursor: pointer;
`

const Navbar = () => {
  return (
    <Container>
      <Wrapper>

        <Left>
            <Logo>Agency</Logo>
            <Menu>
                <MenuItem>Home</MenuItem>
                <MenuItem>Features</MenuItem>
                <MenuItem>Services</MenuItem>
                <MenuItem>Pricing</MenuItem>
                <MenuItem>Contact</MenuItem>
            </Menu>
        </Left>

        <Right>JOIN TODAY</Right>

      </Wrapper>
    </Container>
  )
}

export default Navbar;
