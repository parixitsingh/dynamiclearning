import React from 'react';
import PageNavigationHeader from '../../Controls/PageNavigationHeader';

function DetailsContainer(props) {
  return (
    <div>
        <h2>{props.pageTitle}</h2>
        <PageNavigationHeader 
          hideNextBtn={props.hideNextBtn} 
          hidePreviousBtn={props.hidePreviousBtn} 
          onPreviousBtn={props.onPreviousBtn} 
          previousBtnTitle={props.previousBtnTitle} 
          onNextBtn={props.onNextBtn} 
          nextBtnTitle={props.nextBtnTitle}
        />
        {props.content}
    </div>
  )
}
export default DetailsContainer