import React, { useState } from "react";
import ListItem from "./ListItem";

function ListGroup() {
  const cities: string[] = ["Vancouver", "London", "Paris"];
  // const cities: string[] = [];

  const [selectedIndex, setSelectedIndex] = useState(-1);

  //Option 1
  // Case 1: Empty Array
  if (cities.length === 0) {
    return <h3>No cities to select!</h3>;
  }
  // Case 2: Ciities in Array..Show Them
  return (
    <ul className="list-group">
      {cities.map((c, index) => (
        <ListItem key={c} city={c} index={index} />
      ))}
    </ul>
  );
  // //Option 2
  // return (
  //   <>
  //     {/* Case 1: No cities in Array */}
  //     {cities.length === 0 ? <p>NO CITIES TO SELECT</p> : null}
  //     {/* Case 2: Cities in Array */}
  //     <ul className="list-group">
  //       {cities.map((c) => (
  //         <ListItem city={c} />
  //       ))}
  //     </ul>
  //   </>
  // );
  //   // Option 3
  // // true && true   // true
  // // true && 1      // 1
  // // false && 1     // false
  //   return (
  //     <>
  //       {/* Case 1: No cities in Array */}
  //       {cities.length === 0 && <p>NO CITIES TO SELECT</p>}
  //       {/* Case 2: Cities in Array */}
  //       <ul className="list-group">
  //         {cities.map((c) => (
  //           <ListItem city={c} />
  //         ))}
  //       </ul>
  //     </>
  //   );
}

export default ListGroup;
