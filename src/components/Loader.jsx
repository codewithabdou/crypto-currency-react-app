import React, { useState } from "react";
import { Spin } from "antd";

const Loader = () => {
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
      <Spin tip="Loading" size="large"/>
    </div>
  );
};

export default Loader;
