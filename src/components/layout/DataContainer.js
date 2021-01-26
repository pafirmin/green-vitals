import React from "react";
import { useMediaQuery } from "react-responsive";

const DataContainer = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 800 });
  return (
    <div
      style={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        justifyContent: isMobile ? "center" : "space-between",
        alignItems: isMobile ? "center" : "stretch",
      }}
    >
      {children}
    </div>
  );
};

export default DataContainer;
