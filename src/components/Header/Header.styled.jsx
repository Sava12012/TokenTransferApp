import styled from "styled-components";

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
export const WalletUsers = styled.div`
  display: flex;
  padding-left: 20px;
  padding-right: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  label {
    margin-bottom: 10px;
    text-shadow: 3px 5px 6px #ff0081;
    font-size: 2em;
    text-decoration: uppercase;
    color: #fff;
  }
  @media (max-width: 480px) {
    margin-top: 30px;
  }
`;
export const WalletBalance = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  padding-left: 20px;
  padding-right: 20px;
  label {
    margin-bottom: 10px;
    text-shadow: 3px 5px 6px #ff0081;
    font-size: 2em;
    text-decoration: uppercase;
    color: #fff;
  }
`;

export const BtnConnectWallet = styled.button`
  font-size: 1em;
  padding: 1em 2em;
  background-color: #ff0081;
  color: #f8faff;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  position: relative;
  transition: transform ease-in 0.1s, box-shadow ease-in 0.25s;
  box-shadow: 0 2px 25px rgba(255, 0, 130, 0.5);

  &:focus {
    outline: 0;
  }

  &:active {
    transform: scale(0.9);
    background-color: darken($button-bg, 5%);
    box-shadow: 0 2px 25px rgba(255, 0, 130, 0.2);
  }
  @media (max-width: 480px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;
