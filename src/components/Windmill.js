import React from "react";
import { useMediaQuery } from "react-responsive";
import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  height: 570px;
  width: 400px;
  overflow: hidden;
  box-sizing: content-box;
  transition: 1.5s;
  align-self: ${(props) => (props.isMobile ? "center" : "flex-end")};
  position: relative;
  top: ${(props) => (props.show ? "100vh" : "0")};

  :after {
    content: "";
    display: block;
    width: 400px;
    height: 400px;
    background: linear-gradient(#d3ff84, #3e7e00);
    position: relative;
    bottom: -30px;
    border-radius: 50%;
  }
`;

const Stem = styled.div`
  height: 280px;
  width: 17px;
  background: linear-gradient(to left, #b1b1b1, #fff);
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  top: 34%;
  z-index: 2;
  border-radius: 0 0 20px 20px;
`;

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const BladeWrapper = styled.div`
  position: relative;
  height: 400px;
  width: 100%;
  left: 0;
  z-index: 3;
  animation: ${spin} 3.1s linear infinite;

  :before {
    content: "";
    display: block;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: radial-gradient(#fff, #f1f1f1, #b1b1b1);
    box-sizing: border-box;
  }
`;

const Blade = styled.div`
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 37px 0 158px 16px;
  border-color: transparent transparent transparent #fff;
  position: absolute;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  transform: rotate(${(props) => props.rotation}deg);
  z-index: -1;
`;

const Windmill = (props) => {
  const isMobile = useMediaQuery({ maxWidth: "700px" });
  return (
    <Wrapper show={props.loading} isMobile={isMobile}>
      <BladeWrapper>
        <Blade top="50%" left="50%" rotation={"0"} />
        <Blade top="61px" left="105px" rotation={"120"} />
        <Blade top="47px" left="272px" rotation={"240"} />
      </BladeWrapper>
      <Stem />
    </Wrapper>
  );
};

export default Windmill;
