import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

function TableOfContentItem(props) {
  const onClick = (event) => {
    event.preventDefault();
    props.data.callBack(props.data.item.Path);
    if (props.onClick) {
      props.onClick(props.data);
    }
  };

  return (
    <ListGroup.Item key={props.data.name} as="li" onClick={onClick} active={ props.data.activeIndex === props.data.currentIndex} className='table-item'>
      {props.data.item.IndexTitle}
    </ListGroup.Item>
  );
}

export default TableOfContentItem;