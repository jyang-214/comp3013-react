import React from "react";
import ListItem from "./ListItem";
const cities = ["Vancouver", "London", "Paris", "Tokyo"];

function ListGroup() {
  return (
    <ul className="list-group">
      {cities.map((c) => (
        <ListItem city={c} />
      ))}
    </ul>
  );
}

export default ListGroup;