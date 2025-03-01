import React from 'react';
import { render, screen } from '@testing-library/react';
import HeaderSocials from '../header/HeaderSocials'; // Adjust path if necessary

describe('HeaderSocials Component', () => {
  it('renders LinkedIn social link with correct icon and href', () => {
    render(<HeaderSocials />);
    const linkedinLink = screen.getByRole('link', { name: /linkedin/i }); // Using aria-label for icon
    expect(linkedinLink).toBeInTheDocument();
    expect(linkedinLink).toHaveAttribute('href', 'https://www.linkedin.com/in/anudeep-reverent-97a95n90b/');
    expect(linkedinLink).toHaveAttribute('target', '_blank');
    expect(linkedinLink).toHaveAttribute('rel', 'noreferrer');
  });

  it('renders GitHub social link with correct icon and href', () => {
    render(<HeaderSocials />);
    const githubLink = screen.getByRole('link', { name: /github/i });      // Using aria-label for icon
    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute('href', 'https://github.com/anurevs9');
    expect(githubLink).toHaveAttribute('target', '_blank');
    expect(githubLink).toHaveAttribute('rel', 'noreferrer');
  });
});