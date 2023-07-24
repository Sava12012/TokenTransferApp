import React from "react";
import { useEffect, useState } from "react";
import Logo from "../Logo/Logo";
import { HeaderWrapper, WalletUsers, WalletBalance } from "./Header.styled";

function Header() {
  const [walletAddress, setWalletAddres] = useState("");

  useEffect(() => {
    getInformationWallet();
    addWalletListener();
  }, []);

  const connectWallet = async () => {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setWalletAddres(accounts[0]);
        console.log(accounts[0]);
      } catch (err) {
        console.log(err.message);
      }
    } else {
      console.log("Please install Metamask");
    }
  };

  const getInformationWallet = async () => {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_accounts",
        });
        if (accounts.length > 0) {
          setWalletAddres(accounts[0]);
          console.log(accounts[0]);
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
        setWalletAddres(accounts[0]);
        console.log(accounts[0]);
      });
    } else {
      setWalletAddres("");
      console.log("Please install Metamask");
    }
  };

  const getDefaultValue = () => {
    if (!walletAddress || walletAddress.length === 0) {
      return "0F12d...";
    }
    return walletAddress;
  };

  return (
    <>
      <HeaderWrapper>
        <Logo />
        <button onClick={connectWallet}>
          <span>
            {walletAddress && walletAddress.length > 0
              ? `Connected: ${walletAddress.substring(
                  0,
                  6
                )}...${walletAddress.substring(38)}`
              : "Connect Wallet"}
          </span>
        </button>
      </HeaderWrapper>
      <WalletUsers>
        <label>Wallet Address:</label>
        <input type="text" value={walletAddress} readOnly />
      </WalletUsers>
      <WalletBalance>
        <label>Balance:</label>
        <input type="text" defaultValue="0" readOnly />
      </WalletBalance>
    </>
  );
}

export default Header;
