import React from "react";
import { Form } from "./TransferForm.styled";

function TransferForm() {
  return (
    <Form>
      <label>Recipient Address:</label>
      <input type="text" placeholder="Enter recipient address" required />
      <label>Amount:</label>
      <input type="number" placeholder="Enter amount" required />
      <button type="submit">Transfer</button>
    </Form>
  );
}

export default TransferForm;
