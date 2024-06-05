import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import "./TableOfContent.css";
import TableOfContentItem from './TableOfContentItem';

function TableOfContent(props) {
    const topicDisplayName = props.data.Topic + " Tutorial";
    const items = [];
    const callBack = (page) => {
        props.showContent(page)
    };
    for (let i = 0; i < props.data.Pages.length; i++){
        let data = {
            item : props.data.Pages[i],
            callBack: callBack,
            activeIndex: props.activeIndex,
            currentIndex: i
        };
        items.push(<TableOfContentItem data={ data }/>)
    }
  return (
    <div>
        <ListGroup as="ul" className='table-list'>
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