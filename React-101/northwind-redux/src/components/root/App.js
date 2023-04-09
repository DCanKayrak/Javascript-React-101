import React from "react";
import Dashboard from "./Dashboard";
import { Container } from "reactstrap";
import Navi from "../navi/Navi";
import { Route,Routes } from "react-router-dom";
import CartDetail from "../cart/CartDetail";

function App() {
  return (
    <Container>
      <Navi/>
      <Routes>
        <Route exact path="/" element={<Dashboard/>}/> 
        <Route exact path="/cart" element={<CartDetail/>}/> 
      </Routes>
      
    </Container>
  );
}

export default App;
