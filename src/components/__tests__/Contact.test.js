import React from 'react';
import { render, screen } from '@testing-library/react';
import Contacts from '../contacts/Contacts'; // Adjust path if necessary

describe('Contacts Component', () => {
  it('renders Contact Me section', () => {
    render(<Contacts />);
    expect(screen.getByRole('heading', { name: /Contact Me/i })).toBeInTheDocument();
  });

  it('renders Get in touch heading', () => {
    render(<Contacts />);
    expect(screen.getByRole('heading', { name: /Get in touch/i })).toBeInTheDocument();
  });

  it('renders the email contact option', () => {
    render(<Contacts />);
    const emailOption = screen.getByText(/Email/i).closest('.contact__option');
    expect(emailOption).toBeInTheDocument();
    expect(screen.getByText(/chintalaanudeep41@gmail\.com/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Send a message/i })).toHaveAttribute('href', 'mailto:chintalaanudeep41@gmail.com');
  });

  it('renders the contact form', () => {
    render(<Contacts />);
    const contactForm = screen.getByRole('form');
    expect(contactForm).toBeInTheDocument();

    // Check for input fields
    expect(screen.getByPlaceholderText(/Your Full Name/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Your Email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Your Message/i)).toBeInTheDocument();

    // Check for submit button
    expect(screen.getByRole('button', { name: /Send Message/i })).toBeInTheDocument();
  });
});