import React from "react";
import Header from "./components/Header/Header";
import TransferForm from "./components/TransferForm/TransferForm";
import { ContentWrapper } from "./App.styled";

function App() {
  return (
    <>
      <Header />
      <ContentWrapper>
        <TransferForm />
      </ContentWrapper>
    </>
  );
}

export default App;
