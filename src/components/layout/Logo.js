import React from "react";

const Logo = (props) => {
  return (
    <div
      style={{
        position: "absolute",
        top: props.submitted ? "15px" : "16%",
        left: props.submitted ? "200px" : "50%",
        transform: props.submitted ? "" : "translate(-50%)",
        transition: "1.5s",
      }}
    >
      <h1
        style={{
          fontFamily: "'Heebo', sans-serif",
          fontSize: props.submitted ? "2rem" : "4rem",
        }}
      >
        <span style={{ color: "#ace138" }}>Green</span> Vitals
      </h1>
    </div>
  );
};

export default Logo;
