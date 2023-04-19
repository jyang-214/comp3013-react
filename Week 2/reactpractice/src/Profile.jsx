

function Profile({ name, url }) {
    // const name = "Jacky"
    return (
      <>
      <h1>Hello {name}</h1>
      <img src={url} />
        {/* <h1>{name}'s Profile</h1>
        <img src="https://i.imgur.com/MK3eW3Am.jpg" alt="Katherine Johnson" />; */}
      </>
    );
  }

  export default Profile;