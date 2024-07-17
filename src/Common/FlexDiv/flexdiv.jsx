import React from 'react';

function FlexDiv({ direction, justifyContent, alignItems, onClick, children }) {
  return <div onClick={onClick}>{children}</div>;
}

export default FlexDiv;