import styled from 'styled-components/native';

// Contains all the shapes in the game 

export const Traingle = styled.View`
    width: 0px;
    height: 0px;
    background-color: transparent;
    border-style: solid;
    border-top-width: 0;
    border-right-width: 60px;
    border-bottom-width: 120px;
    border-left-width: 60px;
    border-top-color: transparent;
    border-right-color: transparent;
    border-bottom-color: red;
    border-left-color: transparent;
`;

export const Square = styled.View`
    width: 100px;
    height: 100px;
    background-color: red;
`;

export const Rectangle = styled.View`
    width: 200px;
    height: 100px;
    background-color: red;
`;

export const Trapezoid = styled.View`
    width: 150px;
    height: 0;
    border-style: solid;
    border-top-width: 40px;
    border-right-width: 75px;
    border-bottom-width: 0px;
    border-left-width: 75px;
    border-top-color: red;
    border-right-color: transparent;
    border-bottom-color: transparent;
    border-left-color: transparent;
`;

export const Parallelogram = styled.View`
    width: 150px;
    height: 75px;
    transform: skewX(-20deg);
    background-color: red;
`;

export const Oval = styled.View`
    width: 200px;
    height: 100px;
    border-radius: 50px;
    background-color: red;
    border-top-left-radius: 80px;
    border-top-right-radius: 80px;
`;

export const Semicircle = styled.View`
    width: 200;
    height: 100; 
    background-color: blue;
    border-top-left-radius: 100;
    border-top-right-radius: 100; 
    overflow: hidden;
`;
