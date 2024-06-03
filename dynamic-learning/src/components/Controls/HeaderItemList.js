import React from 'react';
import { FaBars } from "react-icons/fa";
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./HeaderItemList.css";

function HeaderItemList(props) {
  return (
    <NavDropdown
        id="header-items-list"
        title= { <FaBars /> }
        menuVariant="dark"
        className="header-items-list-content"
        align={{ lg: 'start' }}
    >
        { props.content }
    </NavDropdown>
  )
}

export default HeaderItemList