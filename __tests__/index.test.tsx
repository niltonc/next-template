import { render, screen } from '@testing-library/react';
import Home from '@/app/page';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />);

    const heading = screen.getByRole('heading', {
      name: /Hello, Next!/i
    });

    expect(heading).toBeInTheDocument();
  });
});
