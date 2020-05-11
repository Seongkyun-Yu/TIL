import React from 'react';

const InputLoginInfo = React.forwardRef((props, ref) => (
  <input type={props.type} ref={ref}></input>
));

export default InputLoginInfo;
