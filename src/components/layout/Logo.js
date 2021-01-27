import React from "react";

const Logo = (props) => {
  return (
    <div
      style={{
        position: props.submitted ? "block" : "absolute",
        top: props.submitted ? "10px" : "16vh",
        left: props.submitted ? "60px" : "50%",
        transform: props.submitted ? "" : "translate(-50%)",
        transition: "1s",
      }}
    >
      <h1
        style={{
          fontFamily: "'Heebo', sans-serif",
          fontSize: props.submitted ? "2rem" : "4rem",
        }}
      >
        <span style={{ color: "#b1e326" }}>Green</span> Vitals
      </h1>
    </div>
  );
};

export default Logo;
