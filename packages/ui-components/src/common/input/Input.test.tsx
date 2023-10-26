import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Input } from './Input';

test('renders input component with correct label', () => {
    const label = 'Input Label';

    render(<Input type='text' placeholder='Search...' value="" onChange={() => { }} size={'small'} />);

    const labelElement = screen.getByText(label);
    expect(labelElement).toBeInTheDocument();
});

test('calls onChange callback when input value changes', () => {
    const label = 'Input Label';
    const onChange = jest.fn();

    render(<Input type='text' placeholder='Search...' value="" onChange={onChange} size={'medium'} />);

    const inputElement = screen.getByLabelText(label);
    const inputValue = 'Test Value';

    userEvent.type(inputElement, inputValue);

    expect(onChange).toHaveBeenCalledWith(inputValue);
});