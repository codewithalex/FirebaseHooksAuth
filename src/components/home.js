import React from "react";
import { Button, Card } from "antd";
import styled from "styled-components";
import Register from "./register";
import { Container } from "../styles/styled";
import { Link } from "react-router-dom";

const home = props => {
  return (
    <Container>
      <Card
        title="Firebase Hooks Tutorial!"
        style={{ width: 300, textAlign: "center" }}
      >
        {" "}
        <Button
          type="primary"
          ghost
          style={{ width: "100%", marginBottom: "10px" }}
          onClick={() => {
            props.history.push("/register");
          }}
        >
          Register
        </Button>
        <Button
          type="primary"
          ghost
          style={{ width: "100%", marginBottom: "10px" }}
        >
          Login
        </Button>
        <Button type="primary" ghost style={{ width: "100%" }}>
          Dashboard
        </Button>
      </Card>
    </Container>
  );
};

export default home;
