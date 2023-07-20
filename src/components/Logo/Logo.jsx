import React from "react";
import { ReactComponent as Icon } from "../../image/svg/metamask.svg";
import { StyledIcon } from "./Logo.styled";

const Logo = () => {
  return (
    <StyledIcon>
      <Icon />
    </StyledIcon>
  );
};

export default Logo;
