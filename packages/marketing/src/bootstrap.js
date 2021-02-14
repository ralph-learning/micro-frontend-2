import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

function mount(el) {
  ReactDOM.render(<App />, el);
}

// development in isolation
if(process.env.NODE_ENV === 'development') {
  const rootDev = document.querySelector('#_markerting-dev-root');

  if(rootDev) {
    mount(rootDev);
  }
}

export { mount };
