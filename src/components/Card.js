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
    <CardWrapper style={style}>
      <CardImage src="https://www.teamfresh.co.kr/resources/assets/img/%ED%99%88%ED%8E%98%EC%9D%B4%EC%A7%80_%EC%82%AC%EC%A7%84/main_card1.png"></CardImage>
      <CardTextWrapper>
        <CardTitle>새벽배송</CardTitle>
        <CardDescription>
          이 카드는 스스로의 개발 능력을 향상시키기위한 컴포넌트 개발입니다.
        </CardDescription>
        <CardButton>더 알아보기</CardButton>
      </CardTextWrapper>
    </CardWrapper>
  );
}

Button.propTypes = {
  label: PropTypes.string,
  border: PropTypes.string,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
};
export default Button;

const CardWrapper = styled.div`
  width: 312px;
  padding: 1rem;
  border: 1px solid black;
`;
const CardImage = styled.img`
  width: 100%;
  height: 215px;
`;
const CardTextWrapper = styled.div`
  padding: 20px;
`;
const CardTitle = styled.div`
  font-size: 19.2px;
  font-weight: 700;
  line-height: 23.04px;
  margin: 0 0 12px 0;
`;
const CardDescription = styled.p`
  font-size: 13.6px;
  line-height: 20.4px;
  margin-bottom: 12px;
`;
const CardButton = styled.button`
  background-color: white;
  padding: 6px 12px;
  border: 1px solid black;
  border-radius: 15px;
  font-size: 13.6px;
  font-weight: 700;
  line-height: 20.4px;
  color: #6c757d;
`;
