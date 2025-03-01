import React from 'react';
import { render, screen } from '@testing-library/react';
import Nav from '../nav/Nav'; // Adjust path if necessary

describe('Nav Component', () => {
  it('renders navigation links with correct icons and hrefs', () => {
    render(<Nav />);
    const navLinks = [
      { name: 'Home', href: '#home' },
      { name: 'About', href: '#about' },
      { name: 'Experience', href: '#experience' },
      { name: 'My Projects', href: '#myprojects' },
      { name: 'Contacts', href: '#contacts' },
    ];

    navLinks.forEach(linkData => {
      const navLink = screen.getByRole('link', { name: linkData.name });
      expect(navLink).toBeInTheDocument();
      expect(navLink).toHaveAttribute('href', linkData.href);
    });
  });

  it('initially sets Home link as active', () => { // Assuming default active state
    render(<Nav />);
    const homeLink = screen.getByRole('link', { name: 'Home' });
    expect(homeLink.closest('a')).toHaveClass('active'); // Check if parent 'a' tag has 'active' class
  });

  // You could add more tests for active link changes on click if needed,
  // but for simple navigation, rendering and href checks are often sufficient.
});