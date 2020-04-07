import React, { useState } from "react";
import { Form, Icon, Input, Button, Card } from "antd";
import { Container } from "../styles/styled";
import firebase from "../config/firebase";

const Login = props => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    firebase
      .login(email, password)
      .then(props.history.push("/dashboard"))
      .catch(err => alert(err));
  };
  return (
    <Container>
      <Card
        title="Firebase Hooks Tutorial Register"
        style={{ width: 300, textAlign: "center" }}
      >
        <Form onSubmit={handleSubmit}>
          <Input
            prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
            placeholder="Email"
            style={{ marginBottom: "10px" }}
            onChange={e => {
              setEmail(e.target.value);
            }}
          />
          <Input
            prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
            type="password"
            placeholder="Password"
            style={{ marginBottom: "10px" }}
            onChange={e => {
              setPassword(e.target.value);
            }}
          />
          <Button
            type="primary"
            style={{ width: "100%", marginBottom: "10px" }}
            htmlType="submit"
          >
            Login
          </Button>
          Or
          <Button
            type="primary"
            className="login-form-button"
            style={{ width: "100%", marginTop: "10px" }}
            onClick={() => {
              props.history.push("/register");
            }}
          >
            Register
          </Button>
        </Form>
      </Card>
    </Container>
  );
};

export default Login;
