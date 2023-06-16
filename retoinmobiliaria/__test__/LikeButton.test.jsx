// @ts-nocheck
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import LikeButton from './components/LikeButton';

describe('LikeButton', () => {
  it('should toggle "liked" state when pressed', () => {
    const { getByTestId } = render(<LikeButton />);

    const button = getByTestId('like-button');
    fireEvent.press(button);

    expect(button.props.icon.props.name).toBe('heart');
    fireEvent.press(button);

    expect(button.props.icon.props.name).toBe('heart-o');
  });
});
