import React from 'react';
import "./ContentPage.css";
import TableOfContent from './TableOfContent';
import Container from 'react-bootstrap/Container';
import { useNavigate, useOutletContext } from "react-router-dom";

function ContentPage(props) {
  const navigate = useNavigate();
  const ctx = useOutletContext();
  ctx.menuBtn.setShowMenuBtn(true);
  const showContent = (topic, page) => {
    navigate("/"+topic+"/"+page)
  };
  return (
    <div className='content-container'>
      <Container fluid>
        <div className={ ctx.menu.showMenu ? 'content-table ': 'content-table hide'}>
          <TableOfContent data = {props.data} showContent={showContent}/>
        </div>
        <div className='content-main'>
          {props.content}
        </div>
        <div className='content-right-section hide'>Right Section</div>
      </Container>
    </div>
  )
}

export default ContentPage