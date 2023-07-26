import styled from "styled-components";

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 10px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
  label {
    text-shadow: 3px 5px 6px #ff0081;
    font-size: 1em;
    text-decoration: uppercase;
    color: #fff;
  }
  @media (max-width: 480px) {
    margin-top: 30px;
  }
`;

export const BtnTransfer = styled.button`
  font-size: 1em;
  padding: 1em 2em;
  margin-top: 20px;
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
`;
