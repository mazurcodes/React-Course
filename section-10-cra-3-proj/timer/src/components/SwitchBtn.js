import React from "react";

const SwitchBtn = ({ active, click }) => {
  return <button onClick={click}>{active ? "Stop" : "Start"}</button>;
};

export default SwitchBtn;
