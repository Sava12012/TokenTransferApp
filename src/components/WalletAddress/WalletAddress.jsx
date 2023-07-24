import React from "react";
import { Label } from "./WalletAddress.styled";

function WalletAddress() {
  return (
    <div>
      <Label>Wallet Address:</Label>
      <input type="text" defaultValue="0x123abc..." readOnly />
    </div>
  );
}

export default WalletAddress;
