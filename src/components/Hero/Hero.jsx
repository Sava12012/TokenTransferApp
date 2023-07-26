import React from "react";
import { useEffect, useState } from "react";
import { ethers } from "ethers";
import Logo from "../Logo/Logo";
import {
  HeaderWrapper,
  WalletUsers,
  WalletBalance,
  BtnConnectWallet,
} from "./Hero.styled";

function Hero() {
  const [walletAddress, setWalletAddress] = useState("");
  const [balance, setBalance] = useState("");

  useEffect(() => {
    getInformationWallet();
    addWalletListener();
  }, [walletAddress]);

  const connectWallet = async () => {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setWalletAddress(accounts[0]);
        console.log(accounts[0]);
      } catch (err) {
        console.log(err.message);
      }
    } else {
      console.log("Please install Metamask");
    }
  };

  const getInformationWallet = async () => {
    console.log("func is called");
    if (
      typeof window !== "undefined" &&
      typeof window.ethereum !== "undefined"
    ) {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_accounts",
        });
        if (accounts.length > 0) {
          setWalletAddress(accounts[0]);
          console.log(accounts[0]);
          //Balance
          const balance = await window.ethereum.request({
            method: "eth_getBalance",
            params: [accounts[0], "latest"],
          });
          const balanceInEther = ethers.formatEther(balance);
          setBalance(Number(balanceInEther).toFixed(5));
          console.log("balanceInEther:", balanceInEther);
        } else {
          console.log("Connect to MetaMask using the Connect Button");
        }
      } catch (err) {
        console.log(err.message);
      }
    } else {
      console.log("Please install Metamask");
    }
  };

  const addWalletListener = async () => {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      window.ethereum.on("accountsChanged", (accounts) => {
        setWalletAddress(accounts[0]);
        console.log(accounts[0]);
      });
    } else {
      setWalletAddress("");

      console.log("Please install Metamask");
    }
  };

  return (
    <>
      <HeaderWrapper>
        <Logo />
        <BtnConnectWallet onClick={connectWallet}>
          <span>
            {walletAddress && walletAddress.length > 0
              ? `Connected: ${walletAddress.substring(
                  0,
                  6
                )}...${walletAddress.substring(38)}`
              : "Connect Wallet"}
          </span>
        </BtnConnectWallet>
      </HeaderWrapper>
      <WalletUsers>
        <label>Wallet Address:</label>
        <input type="text" value={walletAddress} readOnly />
      </WalletUsers>
      <WalletBalance>
        <label>Balance:</label>
        <input type="text" value={balance} readOnly />
      </WalletBalance>
    </>
  );
}

export default Hero;
