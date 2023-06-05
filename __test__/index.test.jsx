import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import HomePage from '../src/pages/index';

describe('HomePage', () => {
  it('renders the ConverterForm and ModalComponent', () => {
    render(<HomePage />);

    const converterForm = screen.getByRole('img', { name: /Picture of the author/i });
    expect(converterForm);

  });

});
