import React from "react";
import {useState} from "react";
import styled from "styled-components";

function CaroselSilde() {
  const [Issilde, SetisSilde] = useState(0);

  const HandleRightChange = () => {
    SetisSilde(Issilde + 1);
  };

  const HandleLeftChange = () => {
    SetisSilde(Issilde - 1);
  };
  return (
    <SildeWrapper>
      <ButtonWrapper>
        <SlideLeftButton>Left</SlideLeftButton>
        <SlideRightButton>Right</SlideRightButton>
      </ButtonWrapper>
    </SildeWrapper>
  );
}

export default CaroselSilde;

const SildeWrapper = styled.div`
  position: relative;
  width: 1400px;
  height: 500px;
  border: 1px solid black;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;
const SlideRightButton = styled.button`
  position: absolute;
  width: 50px;
  height: 50px;
  border-radius: 100%;
  border: none;
  color: grey;
  right: 15px;
  top: 50%;
`;
const SlideLeftButton = styled.button`
  position: absolute;
  width: 50px;
  height: 50px;
  border-radius: 100%;
  border: none;
  color: grey;
  left: 15px;
  top: 50%;
`;
