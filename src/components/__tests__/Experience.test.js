import React from 'react';
import { render, screen } from '@testing-library/react';
import Experience from '../experience/Experience'; // Adjust path if necessary

describe('Experience Component', () => {
  it('renders My Experience section', () => {
    render(<Experience />);
    expect(screen.getByRole('heading', { name: /My Experience/i })).toBeInTheDocument();
  });

  it('renders The skills I have heading', () => {
    render(<Experience />);
    expect(screen.getByRole('heading', { name: /The skills I have/i })).toBeInTheDocument();
  });

  it('renders Frontend Development section with skills', () => {
    render(<Experience />);
    expect(screen.getByRole('heading', { name: /Frontend Development/i })).toBeInTheDocument();

    const frontendSkills = ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'ReactJs'];
    frontendSkills.forEach(skill => {
      expect(screen.getByRole('heading', { name: skill, level: 4 })).toBeInTheDocument();
      expect(screen.getByText(/Experienced|Intermediate|Beginner/i, { selector: 'small' , container: screen.getByRole('heading', { name: skill, level: 4 }).closest('.experience__details')})).toBeInTheDocument(); // Check for skill level small tag
    });
  });

  it('renders Backend Development section with skills', () => {
    render(<Experience />);
    expect(screen.getByRole('heading', { name: /Backend Development/i })).toBeInTheDocument();

    const backendSkills = ['Django', 'MySQL'];
    backendSkills.forEach(skill => {
      expect(screen.getByRole('heading', { name: skill, level: 4 })).toBeInTheDocument();
      expect(screen.getByText(/Experienced|Intermediate|Beginner/i, { selector: 'small' , container: screen.getByRole('heading', { name: skill, level: 4 }).closest('.experience__details')})).toBeInTheDocument(); // Check for skill level small tag
    });
  });
});