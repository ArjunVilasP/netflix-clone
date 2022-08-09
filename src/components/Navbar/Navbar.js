import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <img src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt="logo"/>
        </div>
        <div className="profile">
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="avatar" />
        </div>
      </div>
    </>
  );
}

export default Navbar;
