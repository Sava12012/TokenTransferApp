import React from "react";

function WalletAddress() {
  return (
    <div>
      <label>Wallet Address:</label>
      <input type="text" value="0x123abc..." readOnly />
    </div>
  );
}

export default WalletAddress;
