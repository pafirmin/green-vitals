import React, { Fragment } from "react";
import { capitalize } from "lodash";

const Table = ({ data }) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        width: "520px",
      }}
    >
      <div>Fuel source</div>
      <div>%</div>

      {data
        .sort((a, b) => a.perc < b.perc)
        .map((fuel) => (
          <Fragment>
            <div>{capitalize(fuel.fuel)}</div>
            <div>{fuel.perc}</div>
          </Fragment>
        ))}
    </div>
  );
};

export default Table;
