import styled from "styled-components";

const Input = styled.input`
  background-color: rgba(102, 180, 53, 0);
  border-top: 0px;
  border-left: 0px;
  border-right: 0px;
  border-bottom: 1px solid #00005b;

  padding-left: 14px;
  padding-bottom: 5px;
  font-size: 12px;

  &:focus {
    outline: none;
    box-shadow: 0px 0px 2px rgba(255, 0, 0, 0);
  }

  &::placeholder {
    color: rgba(0, 0, 70, 0.75);
    font-size: 8px;
  }
`;

const Button = styled.button`
  width: 100%;
  padding-top: 8px;
  padding-bottom: 8px;
  margin-top: 5px;
  border: none;
  color: #d7d7d7;
  background-color: #00005b;
  font-size: 8px;
  font-family: Ubuntu;
  cursor: pointer;
  box-shadow: -5px 10px 10px 0px rgba(24, 24, 24, 0.56);
`;

const Title = styled.label`
  font-family: Ubuntu;
  color: white;
`;

export { Input, Title, Button };
