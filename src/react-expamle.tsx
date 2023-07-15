import React, { createElement as e, useState } from "react";

function ReactExample() {
  // return <h1>Hello react</h1>;
  const [count, setCount] = useState(0);
  return e("div", { className: "container" }, [
    e("h1", { className: "font-bold", key: "1" }, `${count}`),
    e(
      "button",
      {
        className: "py-2 px-4 border",
        key: "4",
        onClick: () => {
          setCount(count + 1);
        },
      },
      "Click Me"
    ),
  ]);
}
export default ReactExample;
