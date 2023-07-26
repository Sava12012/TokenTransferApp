import React, { useEffect, useState } from "react";
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

  const isMetamaskInstalled =
    typeof window !== "undefined" && typeof window.ethereum !== "undefined";

  const connectWallet = async () => {
    if (isMetamaskInstalled) {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setWalletAddress(accounts[0]);
      } catch (err) {
        console.log(err.message);
      }
    } else {
      console.log("Please install Metamask");
    }
  };

  const getWalletInformation = async () => {
    if (isMetamaskInstalled) {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_accounts",
        });
        if (accounts.length > 0) {
          setWalletAddress(accounts[0]);
          const balance = await getWalletBalance(accounts[0]);
          setBalance(Number(balance).toFixed(5));
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

  const getWalletBalance = async (walletAddress) => {
    try {
      const balance = await window.ethereum.request({
        method: "eth_getBalance",
        params: [walletAddress, "latest"],
      });
      return ethers.formatEther(balance);
    } catch (err) {
      console.log(err.message);
      return "0";
    }
  };

  useEffect(() => {
    getWalletInformation();
    if (isMetamaskInstalled) {
      addWalletListener();
    }
  }, []);

  const addWalletListener = () => {
    if (isMetamaskInstalled) {
      window.ethereum.on("accountsChanged", async (accounts) => {
        if (accounts.length > 0) {
          setWalletAddress(accounts[0]);
          const balance = await getWalletBalance(accounts[0]);
          setBalance(Number(balance).toFixed(5));
        } else {
          setWalletAddress("");
        }
      });
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
