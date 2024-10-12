// import * as React from 'react';
// import * as ReactDOM from 'react-dom';
import ReactDOM from 'react-dom/client';
import '@types/jest';

// import { Thing } from '../src';

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    // ReactDOM.render(<Thing />, div);
    // ReactDOM.unmountComponentAtNode(div);
    ReactDOM.createRoot(div);

    console.log('Hola Mundo');
  });
});
