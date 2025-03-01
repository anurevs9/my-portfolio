import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../footer/Footer'; // Adjust path if necessary

describe('Footer Component', () => {
  it('renders the logo link', () => {
    render(<Footer />);
    const logoLink = screen.getByRole('link', { name: /ANUDEEP/i });
    expect(logoLink).toBeInTheDocument();
    expect(logoLink).toHaveAttribute('href', '#home');
  });

  it('renders navigation links', () => {
    render(<Footer />);
    const navLinks = ['Home', 'About', 'Experience', 'My Projects'];
    navLinks.forEach(linkText => {
      const navLink = screen.getByRole('link', { name: linkText });
      expect(navLink).toBeInTheDocument();
      expect(navLink).toHaveAttribute('href', `#${linkText.toLowerCase().replace(/ /g, '')}`); // Basic href check
    });
  });

  it('renders social links with correct icons and hrefs', () => {
    render(<Footer />);
    const linkedinLink = screen.getByRole('link', { name: /linkedin/i }); // Using aria-label for icon
    const githubLink = screen.getByRole('link', { name: /github/i });     // Using aria-label for icon

    expect(linkedinLink).toBeInTheDocument();
    expect(githubLink).toBeInTheDocument();

    expect(linkedinLink).toHaveAttribute('href', 'https://www.linkedin.com/in/anudeep-reverent-97a95n90b/');
    expect(githubLink).toHaveAttribute('href', 'https://github.com/anurevs9');
  });

  it('renders copyright text', () => {
    render(<Footer />);
    expect(screen.getByText(/© CHINTALA ANUDEEP\. All rightts reserved\./i)).toBeInTheDocument();
  });
});