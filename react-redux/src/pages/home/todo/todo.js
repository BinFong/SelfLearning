import React from 'react';

export default ({ onClick, id, text, completed }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {`ID:${id} - Text: ${text}`}
  </li>
);
