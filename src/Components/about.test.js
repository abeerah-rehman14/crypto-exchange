import React from 'react';
import { render, screen } from '@testing-library/react';
import About from './about';

describe('About', () => {
  test('renders component correctly', () => {
    render(<About />);
    const paragraphElement = screen.getByText((content, element) => {
        return element.tagName.toLowerCase() === 'p' && content.startsWith('This application is build using React Js.');
      });    
    const listItems = screen.getAllByRole('listitem');
    expect(paragraphElement).toBeInTheDocument();
    expect(listItems.length).toBe(8);
  });
});
