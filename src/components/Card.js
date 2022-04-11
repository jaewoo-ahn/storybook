import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

function Button({label, size = "md", handleClick}) {
  let scale = 1;
  if (size === "sm") scale = 0.75;
  if (size === "lg") scale = 1.5;
  const style = {
    padding: `${scale * 0.5}rem ${scale * 1}rem`,
  };
  return (
    <div style={style}>
      <CardWrapper>
        <ImgSection src="https://www.teamfresh.co.kr/resources/assets/img/%ED%99%88%ED%8E%98%EC%9D%B4%EC%A7%80_%EC%82%AC%EC%A7%84/main_card1.png" />
        <CardTitle>Card Example</CardTitle>
        <CardDescription>이 카드는 예시로 만드는 카드입니다.</CardDescription>
        <CardButton>더 알아보</CardButton>
      </CardWrapper>
    </div>
  );
}

Button.propTypes = {
  label: PropTypes.string,
  border: PropTypes.string,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
};
export default Button;

const CardWrapper = styled.div`
  width: 500px;
  height: 500px;
  border: 1px solid black;
  background-color: aliceblue;
`;

const ImgSection = styled.img`
  height: 215px;
`;
const CardTitle = styled.div``;
const CardDescription = styled.div``;
const CardButton = styled.button``;
