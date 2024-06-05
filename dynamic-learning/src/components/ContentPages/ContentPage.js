import React from 'react';
import "./ContentPage.css";
import TableOfContent from './TableOfContent';
import Container from 'react-bootstrap/Container';
import { useNavigate, useOutletContext } from "react-router-dom";
import Footer from '../Controls/Footer';

function ContentPage(props) {
  const navigate = useNavigate();
  const ctx = useOutletContext();
  ctx.menuBtn.setShowMenuBtn(true);
  const showContent = (page) => {
    navigate(props.details.DomainPath+page)
  };
  return (
    <div className='content-container'>
      <Container fluid className='content-fluid-container'>
        <div className={ ctx.menu.showMenu ? 'content-table ': 'content-table hide'}>
          <TableOfContent data={props.details} showContent={showContent} activeIndex={props.activeIndex}/>
        </div>
        <div className='content-main-container'>
            <div className='content-main'>
              {props.content}
            </div>
            <div className='content-right-section hide'>Right Section</div>
            <Footer />
        </div>
      </Container>
    </div>
  )
}

export default ContentPage