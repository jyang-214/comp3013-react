import React, { useState } from "react";

interface Props {
  city: string;
  index: number;
}

function ListItem({ city, index }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const handleClick = (city: string, index: number) => {
    alert(`${city} at index ${index} was clicked!`);
  };
  return (
    <li
      onClick={() => handleClick(city, index)}
      className="list-group-item"
      key={city}
    >
      {city}
    </li>
  );
}

export default ListItem;
