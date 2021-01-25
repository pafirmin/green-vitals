import React from "react";
import styled, { keyframes } from "styled-components";

const loading = keyframes`
  0% {left: 50%; top: 0px; border-radius: 50%;}
  25% {left: 100%; top: 50%; border-radius: 50% 0 0 0;}
  50% {left: 50%; top: 100%; border-radius: 50% 50% 0 0;}
  75% {left: 0px; top: 50%; border-radius: 50% 50% 50% 0;}
  100% {left: 50%; top: 0px; border-radius: 50%;}

`;

const LoaderWidget = styled.div`
  width: 20px;
  height: 20px;
  background: #fff;
  position: relative;
  animation: ${loading};
  animation-duration: 1.4s;
  animation-iteration-count: infinite;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in-out;
`;

const Loader = () => {
  return (
    <div
      style={{
        width: "50px",
        height: "50px",
        position: "fixed",
        bottom: "50%",
        left: "50%",
        transform: "translate(-50%)",
      }}
    >
      <LoaderWidget />
    </div>
  );
};

export default Loader;
