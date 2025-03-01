import React from 'react';
import { render, screen } from '@testing-library/react';
import CTA from '../header/CTA'; // Adjust path if necessary

describe('CTA Component', () => {
  it('renders Download CV button as a link', () => {
    render(<CTA />);
    const downloadCVLink = screen.getByRole('link', { name: /Download CV/i });
    expect(downloadCVLink).toBeInTheDocument();
    expect(downloadCVLink).toHaveAttribute('href'); // Check if href attribute exists (points to CV)
    expect(downloadCVLink).toHaveAttribute('download'); // Check for download attribute
  });

  it('renders Contact Me button as a link', () => {
    render(<CTA />);
    const contactMeLink = screen.getByRole('link', { name: /Contact Me/i });
    expect(contactMeLink).toBeInTheDocument();
    expect(contactMeLink).toHaveAttribute('href', '#contacts');
  });
});