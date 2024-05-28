import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

function TableOfContentItem(props) {
  const onClick = (event) => {
    event.preventDefault();
    props.data.callBack(props.data.item.page);
    if (props.onClick) {
      props.onClick(props.data);
    }
  };

  return (
    <ListGroup.Item key={props.data.name} as="li" onClick={onClick} active={ props.data.activeIndex === props.data.currentIndex}>
      {props.data.item.topic}
    </ListGroup.Item>
  );
}

export default TableOfContentItem;