// @ts-nocheck
import React from 'react';
import { render } from '@testing-library/react-native';
import { jest } from '@jest/globals';
import PropertyList from './components/PropertyList';

jest.unstable_mockModule('node:child_process', () => ({
  execSync: jest.fn(),
  // etc.
}));

describe('PropertyList', () => {
  it('should render property cards', () => {
    const { getAllByTestId } = render(<PropertyList />);
    const propertyCards = getAllByTestId('property-card');

    expect(propertyCards.length).toBe(3); // Assuming there are 3 properties in the properties.json file
  });
});
