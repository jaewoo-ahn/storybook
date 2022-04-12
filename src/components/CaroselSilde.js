import React from "react";
import {useState} from "react";
import styled from "styled-components";
import {useEffect} from "react";

function CaroselSilde() {
  const [Issilde, SetisSilde] = useState(0);
  const [SlideData, SetSlideData] = useState();

  const HandleRightChange = (e) => {
    e.preventDefault();
    SetisSilde(Issilde + 1);
  };

  const HandleLeftChange = (e) => {
    e.preventDefault();
    SetisSilde(Issilde - 1);
  };

  useEffect(() => {
    fetch("/data/Mockup/market_collection.json")
      .then((res) => res.json())
      .then((data) => {
        SetSlideData(data.data);
      });
  }, []);

  console.log(SlideData);
  return (
    <SildeWrapper>
      <ButtonWrapper>
        <SlideLeftButton onClick={HandleLeftChange}>Left</SlideLeftButton>
        <SlideRightButton onClick={HandleRightChange}>Right</SlideRightButton>
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
