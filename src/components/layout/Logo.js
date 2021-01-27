import React from "react";

const Logo = (props) => {
  return (
    <div
      style={{
        position: props.submitted ? "block" : "absolute",
        top: props.submitted ? "10px" : "100px",
        left: props.submitted ? "60px" : "50%",
        transform: props.submitted ? "" : "translate(-50%)",
        transition: "1s",
        width: "200px",
      }}
    >
      <h1
        style={{
          fontFamily: "'Heebo', sans-serif",
          fontSize: props.submitted ? "2rem" : "4rem",
          cursor: "default",
        }}
      >
        <span style={{ color: "#b9f414" }}>green</span> vitals
      </h1>
    </div>
  );
};

export default Logo;
