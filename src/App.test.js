// src/App.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App'; // Correct import path for App.js

describe('App Component', () => {
  it('renders the header component', () => {
    render(<App />);
    expect(screen.getByRole('banner', { id: 'home' })).toBeInTheDocument(); // If you *want* to use 'banner' role, you can query by id if needed // Example: Check for Header content
  });

  it('renders the navigation component', () => {
    render(<App />);
    expect(screen.getByRole('navigation')).toBeInTheDocument(); // Example: Check for Nav element
  });

  it('renders the header component', () => {
    render(<App />);
    expect(screen.getByRole('heading', { name: /Hello, I'm/i, level: 5, container: screen.getByRole('banner') })).toBeInTheDocument(); // Check for <h5> within banner
  });

  // Add more tests to verify other parts of your App component
});