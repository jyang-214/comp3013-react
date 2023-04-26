import React from "react";
import ListItem from "./ListItem";
const cities = ["Vancouver", "London", "Paris", "Tokyo"];

function ListGroup() {
  return (
    <>
      {cities.map((c) => (
        <ListItem city={c} />
      ))}
    </>
  );
}

export default ListGroup;