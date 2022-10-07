import React from 'react';
import styled from 'styled-components';

const Square = styled.div`
    width: 60px;
    height: 60px;
    background-color: #4e6bff;
    opacity: 0.7;
    position: absolute;
    left: -60px;
    top: -60px;
    z-index: -1;
    animation: square 25s alternate infinite;

    @keyframes square {
        to{
            transform: translate(100vw, 100vh);
        }
    }
`;

const Circle = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: #ff97af;
    opacity: 0.7; 
    position: absolute;
    top: 200px;
    left: -60px;
    z-index: -1;
    animation: circle 25s alternate infinite;

    @keyframes circle {
        to{
            transform: translate(100vw, -100vh);
        }
    }
`;

const Rectangle = styled.div`
    width: 50px;
    height: 100px;
    background-color: #669966;
    opacity: 0.5; 
    position: absolute;
    top: 400px;
    left: -60px;
    z-index: -1;
    animation: rect 25s alternate infinite;

    @keyframes rect {
        to{
            transform: translate(100vw, -50vh);
        }
    }
`

const AnimatedShapes = () => {
  return (
  <>
    <Square />
    <Circle />
    <Rectangle />
  </>

  )
}

export default AnimatedShapes
