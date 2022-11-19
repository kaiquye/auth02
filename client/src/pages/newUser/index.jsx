import React from "react";
import { Page, Container, Form } from "./style/styles.componets";
import { Button, Input } from "../../components/application.components";
import UserService from "../../services/user/user.service";
import { AuthContext } from "../../context/auth.context";

export function RegisterUser() {
  const { Token } = React.useContext(AuthContext);

  const [fist_name, setFIst_name] = React.useState();
  const [last_name, setLast_name] = React.useState();
  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();

  const registerUser = async (event) => {
    event.preventDefault();
    const data = await UserService.register(
      Token,
      fist_name,
      last_name,
      email,
      password
    );

    console.log(data);
  };

  return (
    <Page>
      <Container>
        <Form onSubmit={async (e) => registerUser(e)}>
          <img
            style={{ width: "65px", marginBottom: "15px", opacity: "40%" }}
            src={"https://cdn-icons-png.flaticon.com/512/149/149071.png"}
          />
          <Input
            placeholder={"email ID"}
            onChange={({ target }) => setEmail(target.value)}
          />
          <Input
            placeholder={"fist name"}
            onChange={({ target }) => setFIst_name(target.value)}
          />
          <Input
            placeholder={"last name"}
            onChange={({ target }) => setLast_name(target.value)}
          />
          <Input
            placeholder={"Password"}
            type={"password"}
            onChange={({ target }) => setPassword(target.value)}
          />
          <Button>REGISTER</Button>
        </Form>
      </Container>
    </Page>
  );
}
