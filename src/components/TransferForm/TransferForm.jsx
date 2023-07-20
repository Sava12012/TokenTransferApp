import React from "react";

function TransferForm() {
  return (
    <form>
      <label>Recipient Address:</label>
      <input type="text" placeholder="Enter recipient address" required />
      <label>Amount:</label>
      <input type="number" placeholder="Enter amount" required />
      <button type="submit">Transfer</button>
    </form>
  );
}

export default TransferForm;
