import React from "react";
import styled, { keyframes } from "styled-components";

const loading = keyframes`
  0% {left: 50%; top: 0px; border-radius: 50% 50% 50% 0;}
  25% {left: 100%; top: 50%; border-radius: 0 50% 50% 50%;}
  50% {left: 50%; top: 100%; border-radius: 50% 0 50% 50%;}
  75% {left: 0%; top: 50%; border-radius: 50% 50% 0 50%; }
  100% {left: 50%; top: 0px; border-radius: 50% 50% 50% 0;}
`;

const LoaderWidget = styled.div`
  height: 100%;
  width: 100%;

  & div {
    width: 20px;
    height: 20px;
    background: #fff;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: ${loading} 1.8s linear infinite;
  }

  & div:nth-child(2) {
    transform: translate(-50%, -150%);
    animation-delay: -0.9s;
  }
`;

const Loader = () => {
  return (
    <div
      style={{
        position: "fixed",
        bottom: "50%",
        left: "50%",
        transform: "translate(-50%)",
        textAlign: "center",
      }}
    >
      <div
        style={{
          width: "100px",
          height: "100px",
          margin: "auto",
        }}
      >
        <LoaderWidget>
          <div />
          <div />
        </LoaderWidget>
      </div>
      <div style={{ marginTop: "40px", fontSize: "1.4rem" }}>
        <span>Working on it...</span>
      </div>
    </div>
  );
};

export default Loader;
