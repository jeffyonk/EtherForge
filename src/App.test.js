// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders EtherForge title', () => {
    render(<App />);
    const titleElement = screen.getByText(/EtherForge/i);
    expect(titleElement).toBeInTheDocument();
});
