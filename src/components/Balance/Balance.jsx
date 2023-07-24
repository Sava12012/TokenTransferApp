import React from "react";
import { LabelBalance, InputBallance } from "./Balance.styled";

function Balance() {
  return (
    <div>
      <LabelBalance>Balance:</LabelBalance>
      <InputBallance type="text" defaultValue="0" readOnly />
    </div>
  );
}

export default Balance;
