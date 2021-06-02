import {render, screen} from '@testing-library/react';
import ReactSocialApp from './App';
import React from 'react';
import ReactDOM from 'react-dom';

/*
test('renders learn react link', () => {
  render(<ReactSocialApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
*/

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ReactSocialApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});