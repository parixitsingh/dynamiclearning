import React from 'react'
import { FaThLarge } from "react-icons/fa";
import NavDropdown from 'react-bootstrap/NavDropdown';
import RowBullet from './Bullet/RowBullet';

function CategoriesButton(props) {
    const title = <span className="title-text"><FaThLarge /> {props.data.title} </span>;
    const headerTitle = props.data.headerTitle;
    const rows = [];
    for (let i = 0; i < props.data.rows.length; i++){
        rows.push(<NavDropdown.Item><RowBullet data={props.data.rows[i]} /></NavDropdown.Item>)
    }
    return (
        <NavDropdown
            id="header-navbar-dropdown"
            title= { title }
            menuVariant="dark"
            className="header-title-text"
        >
            <NavDropdown.Header>
                <span className="categories-button-text">{ headerTitle }</span>
            </NavDropdown.Header>
            { rows }
        </NavDropdown>
    )
}

export default CategoriesButton