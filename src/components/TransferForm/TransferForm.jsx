import React, { useState, useEffect } from "react";
import { Form, BtnTransfer } from "./TransferForm.styled";

function TransferForm() {
  const [accounts, setAccounts] = useState([]);
  const [recipientAddress, setRecipientAddress] = useState("");
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);
  const [transferResult, setTransferResult] = useState("");

  useEffect(() => {
    getAccount();
  }, []);

  async function getAccount() {
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setAccounts(accounts);
    } catch (error) {
      console.error("Error fetching accounts:", error);
    }
  }

  async function handleTransfer() {
    setLoading(true);
    try {
      const amountWei = (parseFloat(amount) * 1e18).toString(); // Перевести суму в вей
      const txHash = await window.ethereum.request({
        method: "eth_sendTransaction",
        params: [
          {
            from: accounts[0],
            to: recipientAddress,
            value: amountWei, // Юзаю конвертовану суму у вей
            gasLimit: "0x5028",
            maxPriorityFeePerGas: "0x3b9aca00",
            maxFeePerGas: "0x2540be400",
          },
        ],
      });
      console.log("Transaction Hash:", txHash);
      setTransferResult("The transfer was successfully completed");
    } catch (error) {
      console.error("Error sending transaction:", error);
      setTransferResult("Error sending transaction");
    }
    setLoading(false);
  }

  return (
    <Form>
      <label>Recipient Address:</label>
      <input
        type="text"
        placeholder="Enter recipient address"
        required
        value={recipientAddress}
        onChange={(e) => setRecipientAddress(e.target.value)}
      />
      <label>Amount:</label>
      <input
        type="number"
        placeholder="Enter amount"
        required
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <BtnTransfer onClick={handleTransfer} disabled={loading}>
        {loading ? <span className="loading">Loading...</span> : "Send"}
      </BtnTransfer>
      {transferResult && (
        <p
          style={{
            color: "black",
            marginTop: "20px",
            backgroundColor: "#e4a4f4",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0 2px 25px rgba(255, 0, 130, 0.5)",
          }}
        >
          {transferResult}
        </p>
      )}
    </Form>
  );
}

export default TransferForm;
