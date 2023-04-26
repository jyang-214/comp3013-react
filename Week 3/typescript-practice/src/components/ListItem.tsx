import React from "react";

interface Props {
  city: string;
}

function ListItem({ city }: Props) {
  return <li>{city}</li>;
}

export default ListItem;
