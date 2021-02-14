import React from 'react';
import ReactDOM from 'react-dom';

function mount(el) {
  ReactDOM.render(
    <h1>Hello there!</h1>,
    el
  )
}

// development in isolation
if(process.env.NODE_ENV === 'development') {
  const rootDev = document.querySelector('#_markerting-dev-root');

  if(rootDev) {
    mount(rootDev);
  }
}

export { mount };
