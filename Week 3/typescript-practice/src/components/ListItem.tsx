import React from "react";

interface Props {
  city: string;
}

function ListItem({ city }: Props) {
  return <li className="list-group-item">{city}</li>;
}

export default ListItem;
