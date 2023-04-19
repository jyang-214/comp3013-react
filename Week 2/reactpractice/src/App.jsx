import "./App.css";
import Profile from "./Profile";

// Components MUST START WITH A CAPITAL LETTER
// PascalCasing: First letter in every word starts with a capital letter
// return statements are either on one line
// OR multiple lines with parentheses

function App() {
  return (
    <>
      <h1>My Website</h1>
      <Profile />
      <Profile />
      <Profile />
      <Profile />
    </>
  );
}

function Movies() {}

// export { App, Movies }  // Nmaed Export
export default App; // when you have only one function that exports from this file
