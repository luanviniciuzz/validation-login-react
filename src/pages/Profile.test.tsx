import { render, screen } from '@testing-library/react';
import Profile from './Profile';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

describe('Profile > Unit tests', () => {
  it('should render the photo the name and email', () => {
    render(
      <BrowserRouter>
        <Profile />
      </BrowserRouter>,
    );
    const avatar = screen.getByAltText('avatar image');
    expect(avatar).toBeInTheDocument();
    expect(screen.getByTestId('name')).toBeInTheDocument();
    expect(screen.getByTestId('email')).toBeInTheDocument();
  });
});