import { render, screen, fireEvent } from '@testing-library/react';
import App, { ReplaceColor } from './App';

test('button has correct initial color', () => {
  render(<App />);

  // find an element with a role of button and text of 'Change to blue'
  const colorButton = screen.getByRole('button', { name: 'Change to brown' });

  // expect the background color to be red
  expect(colorButton).toHaveStyle({ backgroundColor: 'red' })

  // click button
  fireEvent.click(colorButton);

  // expect the background color to be blue
  expect(colorButton).toHaveStyle({ backgroundColor: 'brown' });

  // expect the button text to be 'Change to red'
  expect(colorButton.textContent).toBe('Change to red');
});

test('initial conditions', () => {
  render(<App />);
  
  // check that the button starts out enabled
  const colorButton = screen.getByRole('button', { name: 'Change to brown' });
  expect(colorButton).toBeEnabled();

  // check that the checkbox starts out unchecked
  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked();
})

test('checkbox makes button disabled', () => {
    render(<App />);
    // check that the checkbox starts out unchecked
    const checkbox = screen.getByRole('checkbox', { name: 'Disable button'});
    const colorButton = screen.getByRole('button', { name: 'Change to brown' });

    fireEvent.click(checkbox)
    expect(colorButton).not.toBeEnabled();
  
    fireEvent.click(checkbox)
    expect(colorButton).toBeEnabled();
})

test('button disabled color is gray', () => {
    render(<App />);
    // check that the checkbox starts out unchecked
    const checkbox = screen.getByRole('checkbox', { name: 'Disable button'});
    const colorButton = screen.getByRole('button', { name: 'Change to brown' });

    fireEvent.click(checkbox)
    expect(colorButton).not.toBeEnabled();
    expect(colorButton).toHaveStyle({ backgroundColor: 'orange' })


    fireEvent.click(checkbox)
    expect(colorButton).toBeEnabled();
    expect(colorButton).toHaveStyle({ backgroundColor: 'red' })
})

test('test our func', () => {
    expect(ReplaceColor('Red')).toBe('Red');

    expect(ReplaceColor('RedBurn')).toBe('Red Burn');

    expect(ReplaceColor('RedBurnRed')).toBe('Red Burn Red');
})