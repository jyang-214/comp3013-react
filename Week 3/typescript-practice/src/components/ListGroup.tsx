import React from "react";
import ListItem from "./ListItem";
const cities = ["Vancouver", "London", "Paris", "Tokyo"];

export default function ListGroup() {
  return (
    <>
      {cities.map((c) => (
        <ListItem city={c} />
      ))}
    </>
  );
}
