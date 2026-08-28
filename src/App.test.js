// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders ShiftYarn title', () => {
    render(<App />);
    const titleElement = screen.getByText(/ShiftYarn/i);
    expect(titleElement).toBeInTheDocument();
});
