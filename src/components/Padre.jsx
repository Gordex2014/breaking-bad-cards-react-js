import React from "react";
import { Hijo } from "./Hijo";

export const Padre = () => {
  return (
    <div>
      <Hijo text="bar" title="foo" />
    </div>
  );

    // return React.createElement(
    //   "div",
    //   {},
    //   React.createElement(Hijo, { text: "bar", title: "foo" })
    // );
};
