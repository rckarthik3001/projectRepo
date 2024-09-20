import { render, screen, fireEvent } from '@testing-library/react';
import Login from '../src/components/Auth/Login';
import Signup from '../src/components/Auth/Signup';

test('renders login form', () => {
    render(<Login />);
    const emailLabel = screen.getByText(/Email/i);
    expect(emailLabel).toBeInTheDocument();
});

test('renders signup form', () => {
    render(<Signup />);
    const emailLabel = screen.getByText(/Email/i);
    expect(emailLabel).toBeInTheDocument();
});
