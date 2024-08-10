/** @jsxImportSource react */

import { isEven } from "@my-monorepo/utils/is-even";
import * as React from "react";

function MyReactComponent() {
  return React.createElement(
    "div",
    {},
    `React component. 10 is even: ${isEven(10)}`
  );
}

export { MyReactComponent };

export default MyReactComponent;
