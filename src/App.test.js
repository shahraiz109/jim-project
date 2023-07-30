import React from 'react';
import App from './App';
import {render, fireEvent, waitFor, screen} from '@testing-library/react'

test('renders learn react link',async () => {
    let screen = render(<App/>);
     expect(screen.getByText(/Hello/i)).toBeInTheDocument()
});