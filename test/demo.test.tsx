import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Thing } from '../src/views/thing';

describe('Thing', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Thing />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});