import React from 'react';

const Hello = (props) => {
  const { greeting } = props || 'Hi';
  return (
    <div>{greeting}</div>
  );
};

export default Hello;
