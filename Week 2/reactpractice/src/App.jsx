import "./App.css";
import Profile from "./Profile";

// Components MUST START WITH A CAPITAL LETTER
// PascalCasing: First letter in every word starts with a capital letter
// return statements are either on one line
// OR multiple lines with parentheses

function App() {
  const profiles = [
    { name: "Sandra", url: "https://i.imgur.com/MK3eW3Am.jpg" },
    { name: "James", url: "https://i.imgur.com/7vQD0fPs.jpg" },
  ];

  return (
    <>
      <h1>My Website</h1>
      {profiles.map((profile) => (
        <Profile name={profile.name} url={profile.url} />
      ))}
    </>
  );
}

function Movies() {}

// export { App, Movies }  // Nmaed Export
export default App; // when you have only one function that exports from this file
