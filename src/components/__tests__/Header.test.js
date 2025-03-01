import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../header/Header'; // Adjust path if necessary

describe('Header Component', () => {
  it('renders Hello, I\'m heading', () => {
    render(<Header />);
    expect(screen.getByRole('heading', { name: /Hello, I'm/i })).toBeInTheDocument();
  });

  it('renders name heading', () => {
    render(<Header />);
    expect(screen.getByRole('heading', { name: /CHINTALA ANUDEEP/i, level: 1 })).toBeInTheDocument();
  });

  it('renders title heading', () => {
    render(<Header />);
    expect(screen.getByRole('heading', { name: /Python Full Stack Developer/i, level: 5 })).toBeInTheDocument();
  });

  it('renders CTA buttons', () => {
    render(<Header />);
    expect(screen.getByRole('link', { name: /Download CV/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Contact Me/i })).toBeInTheDocument();
  });

  it('renders HeaderSocials component', () => {
    render(<Header />);
    expect(screen.getByRole('group')).toBeInTheDocument(); // Assuming HeaderSocials renders a div or similar
  });

  it('renders the "me" image', () => {
    render(<Header />);
    const meImage = screen.getByRole('img', { name: /me/i });
    expect(meImage).toBeInTheDocument();
    expect(meImage).toHaveAttribute('src'); // Check if src attribute exists
  });

  it('renders the scroll down link', () => {
    render(<Header />);
    const scrollDownLink = screen.getByRole('link', { name: /Scroll Down/i });
    expect(scrollDownLink).toBeInTheDocument();
    expect(scrollDownLink).toHaveAttribute('href', '#contacts');
  });
});