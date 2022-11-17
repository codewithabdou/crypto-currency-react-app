import React, { useState } from "react";
import { Progress } from "antd";

const Loader = () => {
  const [value, setValue] = useState(0);
  setTimeout(() => {
    if (value < 98) {
      setValue((currentValue) => currentValue + 1);
    }
  }, 15);
  return (
    <div
      style={{
        width: "100%",
        height: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Progress type="circle" percent={value} />
    </div>
  );
};

export default Loader;
