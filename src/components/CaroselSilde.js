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
      {SlideData &&
        SlideData.map((slide, idx) => {
          return (
            <Slide key={slide.id} isSelected={Issilde === idx + 1}>
              <ImageDescription>
                <SlideImg src={slide.thumbnail} alt={slide.title} />
              </ImageDescription>
            </Slide>
          );
        })}
      <ButtonWrapper>
        <SlideLeftButton onClick={HandleLeftChange}>Left</SlideLeftButton>
        <SlideRightButton onClick={HandleRightChange}>Right</SlideRightButton>
      </ButtonWrapper>
    </SildeWrapper>
  );
}

export default CaroselSilde;

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

const SildeWrapper = styled.div`
  position: relative;
  height: 500px;
  margin: 120px auto 100px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  object-fit: cover;
`;

const Slide = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: lightslategray;
  opacity: ${(props) => (props.isSelected ? 1 : 0)};
  transition: opacity ease-in-out 0.4s;
`;

const ImageDescription = styled.div`
  position: absolute;
  top: 45%;
  left: 15%;
`;

const SlideImg = styled.img`
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: scale(1.4);
`;
