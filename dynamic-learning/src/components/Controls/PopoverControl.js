import React from 'react';
import Popover from "@material-ui/core/Popover";

function PopoverControl(props) {
  return (
    <Popover>
        { props.content }
    </Popover>
  )
}

export default PopoverControl