import styled from "styled-components";

const Page = styled.main`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;

  background-color: #a9bcd9;

  align-items: center;
  justify-content: center;
`;

const Container = styled.section`
  display: flex;
  flex-direction: column;

  width: 40%;
  height: 40%;

  align-items: center;
  justify-content: center;
`;

const Form = styled.form`
  width: 180px;
  height: 200px;

  display: flex;
  flex-direction: column;

  gap: 5px;

  align-items: center;
  justify-content: center;
`;

export { Page, Container, Form };
