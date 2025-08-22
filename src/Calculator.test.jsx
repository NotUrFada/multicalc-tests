import { describe, expect, it } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import { OperandContext } from './context/OperandContext';
import Calculator from './Calculator';

describe('Calculator', () => {
  it('calculates cubed value correctly', () => {
    const operand = 2;
    render(
      <OperandContext.Provider value={{ operand }}>
        <Calculator />
      </OperandContext.Provider>
    );

    const cubedSection = screen.getByRole('heading', {
      name: /cubed/i,
    }).parentElement;
    expect(within(cubedSection).getByText('8')).toBeInTheDocument();
  });

  it('calculates multiply by three value correctly', () => {
    const operand = 3;
    render(
      <OperandContext.Provider value={{ operand }}>
        <Calculator />
      </OperandContext.Provider>
    );

    const multiplySection = screen.getByRole('heading', {
      name: /multiply by 3/i,
    }).parentElement;
    expect(within(multiplySection).getByText('9')).toBeInTheDocument();
  });
});
