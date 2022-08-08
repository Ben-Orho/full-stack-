// rafce
import React from "react";

const Navigation = ({ onSignIn }) => {
  return (
    <nav style={{ display: "flex", justifyContent: "flex-end" }}>
      <p className="f3 pa3 dim black pointer link underline" onClick={onSignIn}>
        sign out
      </p>
    </nav>
  );
};

export default Navigation;
