import styled from "styled-components";

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
export const WalletUsers = styled.div`
  display: flex;
  padding-left: 10px;
  padding-right: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  label {
    margin-bottom: 10px;
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
  padding-left: 10px;
  padding-right: 10px;
  label {
    margin-bottom: 10px;
  }
`;
