// src/components/__tests__/Myprojects.test.js
import React from 'react';
import { render, screen, within } from '@testing-library/react'; // Import 'within'
import Myprojects from '../myprojects/Myprojects';

describe('Myprojects Component', () => {
  // ... other tests ...

  it('renders portfolio items (projects)', () => {
    render(<Myprojects />);
    const projectItems = screen.getAllByRole('article', { className: 'portfolio__item' });
    expect(projectItems.length).toBeGreaterThanOrEqual(3);

    const firstProject = projectItems[0];

    const projectImage = within(firstProject).getByRole('img'); // Use within here
    expect(projectImage).toBeInTheDocument();

    expect(within(firstProject).getByRole('heading', { level: 3 })).toBeInTheDocument();
    expect(within(firstProject).getByText(/HTML \| CSS \| Bootstrap \| JavaScript \| Django \| MySQL/i)).toBeInTheDocument();

    const githubLink = within(firstProject).getByRole('link', { name: /Github/i }); // Use within for links too, for consistency
    const websiteLink = within(firstProject).getByRole('link', { name: /Visit Website/i });

    expect(githubLink).toBeInTheDocument();
    expect(websiteLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute('href');
    expect(websiteLink).toHaveAttribute('href');
  });
});