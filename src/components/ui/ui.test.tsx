import { fireEvent, render, screen } from '@testing-library/react';
import Button from './Button';
import Input from './Input';
import Text from './Text';

describe('test ui components', () => {
  it('should show button', async () => {
    render(<Button>Test Button</Button>);

    const button = await screen.findByRole('button');
    expect(button).toHaveTextContent('Test Button');
  });
  it('should show input component', async () => {
    render(<Input label="input label" />);
    const input = await screen.findByRole('textbox');

    fireEvent.change(input, { target: { value: 'value inputted' } });

    expect(input).toHaveValue('value inputted');
  });
  it('should show text heading (h1) component', async () => {
    render(<Text>Paragraph</Text>);
    const text = await screen.findByText('Paragraph');
    expect(text).toBeVisible();
  });
  it('should show text paragraph component', async () => {
    render(<Text type="h1">Heading</Text>);
    const text = await screen.findByRole('heading');
    expect(text).toHaveTextContent('Heading');
  });
});
