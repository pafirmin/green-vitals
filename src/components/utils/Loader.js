import React from "react";
import styled, { keyframes } from "styled-components";

const loading = keyframes`
  0% {left: 50%; top: 0px; border-radius: 50% 50% 50% 0;}
  25% {left: 100%; top: 50%; border-radius: 0 50% 50% 50%;}
  50% {left: 50%; top: 100%; border-radius: 50% 0 50% 50%;}
  75% {left: 0%; top: 50%; border-radius: 50% 50% 0 50%; }
  100% {left: 50%; top: 0px; border-radius: 50% 50% 50% 0;}

`;

const LoaderWidget1 = styled.div`
  width: 20px;
  height: 20px;
  background: #fff;
  position: relative;
  animation: ${loading};
  animation-duration: 1.8s;
  animation-iteration-count: infinite;
  animation-fill-mode: forwards;
  animation-timing-function: linear;
  transform: translateX(-50%);
`;

const LoaderWidget2 = styled(LoaderWidget1)`
  transform: translateY(-100%) translateX(-50%);
  animation-delay: -0.9s;
`;

const Loader = () => {
  return (
    <div
      style={{
        width: "200px",
        position: "fixed",
        bottom: "50%",
        left: "50%",
        transform: "translate(-50%)",
        textAlign: "center",
      }}
    >
      <div
        style={{
          width: "80px",
          height: "80px",
          margin: "auto",
        }}
      >
        <LoaderWidget1 />
        <LoaderWidget2 />
      </div>
      <div style={{ marginTop: "40px", fontSize: "1.4rem" }}>
        <span>Working on it...</span>
      </div>
    </div>
  );
};

export default Loader;
