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
    <ListGroup.Item key={props.data.name} as="li" onClick={onClick} active={ props.data.activeItem === props.data.item.page}>
      {props.data.item.topic}
    </ListGroup.Item>
  );
}

export default TableOfContentItem;