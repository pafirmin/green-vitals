import React, { Fragment } from "react";
import { capitalize } from "lodash";

const Table = ({ data, headings }) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        width: "30%",
        margin: "0 .5rem",
      }}
    >
      <div>
        <h4>{headings[0]}</h4>
      </div>
      <div style={{ textAlign: "right" }}>
        <h4>{headings[1]}</h4>
      </div>
      {data.map((value) => (
        <Fragment>
          <div>{capitalize(value[0])}</div>
          <div style={{ textAlign: "right" }}>{value[1]}</div>
        </Fragment>
      ))}
    </div>
  );
};

export default Table;
