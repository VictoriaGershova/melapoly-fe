import React from 'react';
import ReactDOM from 'react-dom';

import Hello from './js/components/Hello';

const App = () => {
  ReactDOM.render(
    <Hello greeting="Hello" />,
    document.getElementById('app'),
  );
};

export default App;
