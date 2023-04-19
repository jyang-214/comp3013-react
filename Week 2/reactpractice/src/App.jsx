import "./App.css";

// Components MUST START WITH A CAPITAL LETTER
// PascalCasing: First letter in every word starts with a capital letter
// return statements are either on one line
// OR multiple lines with parentheses

function Profile() {
  return (
    <>
      <h1>Your Profile</h1>
      <img src="https://i.imgur.com/MK3eW3Am.jpg" alt="Katherine Johnson" />;
    </>
  );
}

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
