import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ConverterForm from '../src/components/ConverterForm';
import '@testing-library/jest-dom/extend-expect';

describe('ConverterForm', () => {
  it('renders input fields and a button', () => {
    render(<ConverterForm openModal={() => {}} />);

    const nepLabel = screen.getByLabelText(/nep/i);
    expect(nepLabel).toBeInTheDocument();

    const busdLabel = screen.getByLabelText(/busd:/i);
    expect(busdLabel).toBeInTheDocument();

    const button = screen.getByRole('button', { name: /check status/i });
    expect(button).toBeInTheDocument();
  });

  it('updates values and conversions when BUSD input changes', () => {
    render(<ConverterForm openModal={() => {}} />);

    const busdInput = screen.getByLabelText(/busd:/i);

    fireEvent.change(busdInput, { target: { value: '3.00' } });

    expect(busdInput.value).toBe('3.00');

    const nepInput = screen.getByLabelText(/nep:/i);
    expect(nepInput.value).toBe('1.00'); // Assuming conversion rate is 3

    fireEvent.change(busdInput, { target: { value: '' } });

    expect(busdInput.value).toBe('');
    expect(nepInput.value).toBe('');
  });

  it('calls openModal function when "Check Status" button is clicked', () => {
    const openModalMock = jest.fn();
    render(<ConverterForm openModal={openModalMock} />);

    const button = screen.getByRole('button', { name: /check status/i });
    fireEvent.click(button);

    expect(openModalMock).toHaveBeenCalled();
  });
});
