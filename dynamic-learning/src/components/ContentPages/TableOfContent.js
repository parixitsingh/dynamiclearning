import React, { useState }  from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import "./TableOfContent.css";
import TableOfContentItem from './TableOfContentItem';

function TableOfContent(props) {
    const [activeItem, setActiveItem] = useState(props.data.topicList[0].page);
    const [activeTopic, setActiveTopic] = useState(props.data.topic)
    if(props.data.topic !== activeTopic) {
        setActiveTopic(props.data.topic);
        setActiveItem(props.data.topicList[0].page);
    }
    const topicDisplayName = props.data.topic + " Tutorial";
    const items = [];
    const callBack = (page) => {
        setActiveItem(page)
        props.showContent(props.data.topic.toLowerCase(), page)
    };
    for (let i = 0; i < props.data.topicList.length; i++){
        let data = {
            item : props.data.topicList[i],
            callBack: callBack,
            activeItem: activeItem
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