import { screen } from '@testing-library/react';
import { render } from '../../../../test-utils/render';
import Timer from '../index';

const renderTimer = (date: Date) => {
  return render(<Timer date={date} />);
};

describe('Timer', () => {
  test('should render with correct time format', async () => {
    renderTimer(new Date(2024, 1, 1));

    // 00:00:00
    expect(await screen.findByText(/^[0-9]*:[0-9][0-9]:[0-9][0-9]$/)).toBeInTheDocument();
  });
});
