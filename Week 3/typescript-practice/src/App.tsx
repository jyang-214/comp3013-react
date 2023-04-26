import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Viewer from "./components/Viewer";
import ListGroup from "./components/ListGroup";


function App() {
  return (
    <>
      <Viewer />
      <ListGroup />
    </>
  );
}

export default App;
