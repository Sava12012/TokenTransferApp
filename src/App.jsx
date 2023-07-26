import React from "react";
import Hero from "./components/Hero/Hero";
import TransferForm from "./components/TransferForm/TransferForm";
import { ContentWrapper } from "./App.styled";

function App() {
  return (
    <>
      <Hero />
      <ContentWrapper>
        <TransferForm />
      </ContentWrapper>
    </>
  );
}

export default App;
