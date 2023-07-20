import React from "react";
import { LabelBalance } from "./Balance.styled";

function Balance() {
  return (
    <div>
      <LabelBalance>Balance:</LabelBalance>
      <input type="text" value="1000" />
    </div>
  );
}

export default Balance;
