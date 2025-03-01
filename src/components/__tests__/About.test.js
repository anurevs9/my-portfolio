import React from 'react';
import { render, screen } from '@testing-library/react';
import About from '../about/About'; // Adjust path if necessary

describe('About Component', () => {
  it('renders About Me section', () => {
    render(<About />);
    expect(screen.getByRole('heading', { name: /About Me/i })).toBeInTheDocument();
  });

  it('renders Get To Know heading', () => {
    render(<About />);
    expect(screen.getByRole('heading', { name: /Get To Know/i })).toBeInTheDocument();
  });

  it('renders the about me image', () => {
    render(<About />);
    const aboutMeImage = screen.getByRole('img', { name: /Me/i });
    expect(aboutMeImage).toBeInTheDocument();
    expect(aboutMeImage).toHaveAttribute('src'); // Check if src attribute exists
  });

  it('renders degree card with correct text', () => {
    render(<About />);
    const degreeCard = screen.getByText(/Degree/i).closest('.about__card');
    expect(degreeCard).toBeInTheDocument();
    expect(screen.getByText(/BTECH\.\(Hons\) Software Engneering\(G\)/i)).toBeInTheDocument();
  });

  it('renders GPA card with correct text', () => {
    render(<About />);
    const gpaCard = screen.getByText(/GPA/i).closest('.about__card');
    expect(gpaCard).toBeInTheDocument();
    expect(screen.getByText(/6\.9/i)).toBeInTheDocument();
  });

  it('renders Domains card with correct text', () => {
    render(<About />);
    const domainsCard = screen.getByText(/Domains/i).closest('.about__card');
    expect(domainsCard).toBeInTheDocument();
    expect(screen.getByRole('list')).toBeInTheDocument(); // Check if list is rendered
    expect(screen.getByText(/ReactJs/i)).toBeInTheDocument();
    expect(screen.getByText(/Web Applications/i)).toBeInTheDocument();
  });

  it('renders the about me paragraph', () => {
    render(<About />);
    const aboutParagraph = screen.getByText(/Software Engineering graduated/i);
    expect(aboutParagraph).toBeInTheDocument();
  });
});