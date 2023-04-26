import React from "react";
import ListItem from "./ListItem";
// const cities: string[] = ["Vancouver", "London", "Paris", "Tokyo"];
const cities: string[] = [];

function ListGroup() {
  // //Option 1

  //   // Case 1: Empty Array
  //   if (cities.length === 0) {
  //     return <h3>No cities to select!</h3>;
  //   }
  //   // Case 2: Ciities in Array..Show Them
  //   return (
  //     <ul className="list-group">
  //       {cities.map((c) => (
  //         <ListItem city={c} />
  //       ))}
  //     </ul>
  //   );

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

  // Option 3

  return (
    <>
      {/* Case 1: No cities in Array */}
      {cities.length === 0 && <p>NO CITIES TO SELECT</p>}

      {/* Case 2: Cities in Array */}
      <ul className="list-group">
        {cities.map((c) => (
          <ListItem city={c} />
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
