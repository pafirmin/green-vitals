import React from "react";

const Logo = (props) => {
  return (
    <div
      style={{
        position: props.submitted ? "block" : "absolute",
        top: props.submitted ? "0" : "100px",
        left: props.submitted ? "5%" : "50%",
        width: props.submitted ? "auto" : "100%",
        transform: props.submitted ? "" : "translate(-50%)",
        transition: "1s",
        display: "inline-block",
      }}
    >
      <h1
        style={{
          fontFamily: "'Heebo', sans-serif",
          fontSize: props.submitted ? "2em" : "4em",
          cursor: "default",
        }}
      >
        <span style={{ color: "#b9f414" }}>green</span> vitals
      </h1>
    </div>
  );
};

export default Logo;
