import React from "react";
import Logo from "../Logo/Logo";
import { HeaderWrapper } from "./Header.styled";

function Header() {
  return (
    <HeaderWrapper>
      <Logo />
      <button>Connect Wallet</button>
    </HeaderWrapper>
  );
}

export default Header;
