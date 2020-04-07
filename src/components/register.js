import React, { useState } from "react";
import { Form, Icon, Input, Button, Card } from "antd";
import { Container } from "../styles/styled";
import firebase from "../config/firebase";

const Register = props => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    onRegister();
  };
  async function onRegister() {
    try {
      firebase.register(firstName, lastName, email, password);
      props.history.push("/dashboard");
    } catch (err) {
      alert(err.message);
    }
  }
  return (
    <Container>
      <Card
        title="Firebase Hooks Tutorial Register"
        style={{ width: 300, textAlign: "center" }}
      >
        <Form onSubmit={handleSubmit}>
          <Input
            placeholder="First Name"
            style={{ marginBottom: "10px" }}
            onChange={e => {
              setFirstName(e.target.value);
            }}
            autoComplete="off"
          />
          <Input
            placeholder="Last Name"
            style={{ marginBottom: "10px" }}
            onChange={e => {
              setlastName(e.target.value);
            }}
            autoComplete="off"
          />
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
            htmlType="submit"
            className="login-form-button"
            style={{ width: "100%", marginBottom: "10px" }}
          >
            Register
          </Button>
          Or
          <Button
            type="primary"
            onClick={() => {
              props.history.push("/login");
            }}
            style={{ width: "100%", marginTop: "10px" }}
          >
            Login
          </Button>
        </Form>
      </Card>
    </Container>
  );
};

export default Register;
