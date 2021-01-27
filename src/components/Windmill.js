import React from "react";
import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  height: 600px;
  width: 400px;
  position: absolute;
  overflow: hidden;
  box-sizing: content-box;
  top: ${(props) => (props.show ? "135vh" : "40vh")};
  left: 50%;
  transform: translate(-50%);
  transition: 1.5s;

  :after {
    content: "";
    display: block;
    width: 400px;
    height: 400px;
    background: linear-gradient(#d3ff84, #3e7e00);
    position: relative;
    top: 70%;
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
  top: 30%;
  z-index: 2;
  border-radius: 0 0 20px 20px;

  :before {
    content: "";
    display: block;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    position: relative;
    top: -15px;
    left: 0px;
    transform: translateX(-25%);
    background: #fff;
  }
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
  position: absolute;
  height: 400px;
  width: 400px;
  top: -20px;
  animation: ${spin} 2.5s linear infinite;
  z-index: 3;
`;

const Blade = styled.div`
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 37px 0 158px 16px;
  border-color: transparent transparent transparent #fff;
  position: relative;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  z-index: 3;
  transform: rotate(${(props) => props.rotation}deg);
`;

const Windmill = (props) => {
  return (
    <Wrapper show={props.submitted}>
      <BladeWrapper>
        <Blade top="50%" left="200px" rotation={"0"} />
        <Blade top="-130px" left="108px" rotation={"120"} />
        <Blade top="-340px" left="272px" rotation={"240"} />
      </BladeWrapper>
      <Stem />
    </Wrapper>
  );
};

export default Windmill;
