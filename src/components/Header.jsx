import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadphonesAlt } from "@fortawesome/free-solid-svg-icons";

library.add(faHeadphonesAlt);

function Header() {
  return (
    <div className="header">
      <h1>Find A Beat</h1>
      <FontAwesomeIcon className="headphones" icon={faHeadphonesAlt}/>
    </div>
  );
}

export default Header;
