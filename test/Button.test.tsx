import { Button } from '../src/Button';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
const throwAnError = () => {
  throw new Error();
};

describe('Button', () => {
  describe('Should be rendered correctly', () => {
    test('Default-Primary state', () => {
      render(<Button>Heaven Platform</Button>);
      const button = screen.getByText('Heaven Platform');
      expect(button.classList.contains('button-primary')).toBeTruthy();
    });
    test('Secondary state', () => {
      const { container } = render(
        <Button variant={'secondary'}>Heaven Platform</Button>
      );
      const button = container.querySelector('button');
      if (button) {
        expect(button.classList.contains('button-secondary')).toBeTruthy();
      } else expect(throwAnError).toThrow();
    });
    test('Disabled state', () => {
      const { asFragment } = render(<Button disabled>Heaven Platform</Button>);
      expect(asFragment()).toMatchInlineSnapshot(`
        <DocumentFragment>
          <button
            class="button button-primary"
            disabled=""
          >
            Heaven Platform
          </button>
        </DocumentFragment>
      `);
    });

    //HANDLERS========================================================>
    test('onClick handler works', () => {
      const onClick = jest.fn();
      render(<Button onClick={onClick}>Heaven Platform</Button>);
      fireEvent.click(screen.getByText('Heaven Platform'));
      expect(onClick).toBeCalledTimes(1);
    });
    test('onClick handler doesnt work in specific condition', () => {
      const onClick = jest.fn();
      render(
        <Button onClick={onClick} disabled>
          Heaven Platform
        </Button>
      );
      fireEvent.click(screen.getByText('Heaven Platform'));
      expect(onClick).not.toBeCalled();
    });
  });
});
