import { render, screen } from '@testing-library/react';
import Login from './Login';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

describe('Login > Unit tests', () => {
  it('should Login component without errors', () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>,
    );
    expect(screen.getByTestId('email-field')).toBeInTheDocument();
    expect(screen.getByTestId('password-field')).toBeInTheDocument();
    expect(screen.getByText('Sign In')).toBeInTheDocument();
  });
});