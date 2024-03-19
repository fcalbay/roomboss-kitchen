import { screen } from '@testing-library/react';
import { render } from '../../../../test-utils/render';
import PerformanceTracker from '../index';
import useOrderStore from '@/stores/orders.store';

const initialStoreState = useOrderStore.getState();

const renderPerformanceTracker = () => {
  return render(<PerformanceTracker />);
};

describe('PerformanceTracker', () => {
  beforeEach(() => {
    useOrderStore.setState(initialStoreState, true);
    useOrderStore.setState({
      completedOrders: [
        {
          id: 'some-id-0',
          item: 'Hamburger',
          quantity: 1,
          tableNo: '1',
          createdAt: new Date('2024-01-01T03:24:00'),
          completedOn: new Date('2024-01-01T05:24:00'),
        },
        {
          id: 'some-id-1',
          item: 'Fries',
          quantity: 2,
          tableNo: '1A',
          createdAt: new Date('2024-01-01T04:24:00'),
          completedOn: new Date('2024-01-01T04:34:00'),
        },
      ],
    });
  });

  test('should render with correct time format', async () => {
    renderPerformanceTracker();

    // 2 hours and 10 minutes / 2 completed orders
    expect(await screen.findByText(/^Average Completion Time: 01:05:00$/)).toBeInTheDocument();
  });
});
