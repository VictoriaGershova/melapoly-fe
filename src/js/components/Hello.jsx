import React from 'react';

const Hello = (props) => {
  const { greeting } = props || 'Hi';
  return (
    <div className="jumbotron">
      <h1 className="display-4">{greeting}</h1>
    </div>
  );
};

export default Hello;
