import React from 'react';
import { render } from '@testing-library/react';
import StarWarsCharacters from './StarWarsCharacters';

test('renders needed components', () => {
    // AAA Arrange, Act, Assert
    const { getByTestId } = render(<StarWarsCharacters />);
    getByTestId('prev-button');
    getByTestId('next-button');
});

test('', () => {});