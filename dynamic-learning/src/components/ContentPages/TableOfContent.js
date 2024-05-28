import React, { useState }  from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import "./TableOfContent.css";
import TableOfContentItem from './TableOfContentItem';

function TableOfContent(props) {
    const topicDisplayName = props.data.topic + " Tutorial";
    const items = [];
    const callBack = (page) => {
        props.showContent(props.data.topic.toLowerCase(), page)
    };
    for (let i = 0; i < props.data.topicList.length; i++){
        let data = {
            item : props.data.topicList[i],
            callBack: callBack,
            activeIndex: props.activeIndex,
            currentIndex: i
        };
        items.push(<TableOfContentItem data={ data }/>)
    }
  return (
    <div>
        <ListGroup as="ul">
            <ListGroup.displayName >
                <div className='list-header'>
                    { topicDisplayName }
                </div>
            </ListGroup.displayName>
            { items }
        </ListGroup>
    </div>
  )
}

export default TableOfContent