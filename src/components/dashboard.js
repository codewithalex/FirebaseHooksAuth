import React, { useState, useContext } from "react";
import firebase from "../config/firebase";
import { Container } from "../styles/styled";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../Auth";
const Dashboard = props => {
  const { currentUser } = useContext(AuthContext);
  if (currentUser != null) {
    console.log("currentUser", currentUser.email);
    return <Container>{currentUser.email}</Container>;
  }

  return <h1>You are not suppose to be here, login</h1>;
};

export default Dashboard;
