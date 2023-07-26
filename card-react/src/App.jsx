import { useState, useContext } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { CardContext } from "./context/CardContextProvide";
import CardForm from "./components/CardForm";
import CardFront from "./components/CardFront";
import CardBack from "./components/CardBack";

function App() {
  return (
    <div className="App">
      <div className="FormContainer">
        <CardForm />
      </div>
     
      <div>
        <CardFront />
        <CardBack />
      </div>
    </div>
  );
}

export default App;
