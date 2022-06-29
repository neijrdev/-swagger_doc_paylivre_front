import React, { useContext } from "react";
import "./style.css";
import { AuthGoogleContext } from "../../contexts/authGoogle";

function Header() {
  const { user, signOut } = useContext(AuthGoogleContext);
  const { displayName, photoURL } = user;
  return (
    <div className="header-custom">
      <div className="header-profile">
        <img
          className="header-avatar-profile"
          src={photoURL}
          alt="avatar usuario"
        />
        <p className="header-name-profile">{displayName}</p>
      </div>

      <button className="button-exit-header" onClick={() => signOut()}>
        Sair
      </button>
    </div>
  );
}

export default Header;
