import React from "react";
import Header from "./components/Header/Header";
import Balance from "./components/Balance/Balance";
import WalletAddress from "./components/WalletAddress/WalletAddress";
import TransferForm from "./components/TransferForm/TransferForm";
import { ContentWrapper } from "./App.styled";

function App() {
  return (
    <>
      <Header />
      <ContentWrapper>
        <Balance />
        <WalletAddress />
        <TransferForm />
      </ContentWrapper>
    </>
  );
}

export default App;
