import React from "react";
import { Page, Container, Form } from "./style/styles.componets";
import { Button, Input } from "../../components/application.components";
import UserServices from "../../services/user/user.service";
import { AuthContext } from "../../context/auth.context";
import { useNavigate } from "react-router-dom";

export function Login() {
  const navigate = useNavigate();

  const { setToken } = React.useContext(AuthContext);
  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();

  const LogInto = async (event) => {
    event.preventDefault();

    const data = await UserServices.login(email, password);
    setToken(data.token);
    localStorage.setItem("refresh-token", data.refresh_token);

    return navigate("/register");
  };

  return (
    <Page>
      <Container>
        <Form onSubmit={async (e) => LogInto(e)}>
          <img
            style={{ width: "65px", marginBottom: "15px", opacity: "40%" }}
            src={"https://cdn-icons-png.flaticon.com/512/149/149071.png"}
          />
          <Input
            onChange={({ target }) => setEmail(target.value)}
            placeholder={"Email ID"}
          />
          <Input
            onChange={({ target }) => setPassword(target.value)}
            placeholder={"Password"}
            type={"password"}
          />
          <Button>LOGIN</Button>
        </Form>
      </Container>
    </Page>
  );
}
