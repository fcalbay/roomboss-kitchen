import { screen } from '@testing-library/react';
import { render } from '../../../../test-utils/render';
import Table from '../index';
import useOrderStore from '@/stores/orders.store';

const initialStoreState = useOrderStore.getState();

const renderTable = () => {
  return render(<Table />);
};

describe('Table', () => {
  beforeEach(() => {
    useOrderStore.setState(initialStoreState, true);
    useOrderStore.setState({
      pendingOrders: [
        {
          id: 'some-id',
          item: 'Hamburger',
          quantity: 1,
          tableNo: '1',
          createdAt: new Date(),
        },
      ],
    });
  });

  test('should render with table rows', async () => {
    renderTable();

    expect(await screen.findByRole('table')).toBeInTheDocument();
    expect(await screen.findByText(/^Item$/)).toBeInTheDocument();
    expect(await screen.findByText(/^Quantity$/)).toBeInTheDocument();
    expect(await screen.findByText(/^Table No.$/)).toBeInTheDocument();
    expect(await screen.findByText(/^Notes$/)).toBeInTheDocument();
    expect(await screen.findByText(/^Time$/)).toBeInTheDocument();

    // thead and initial data
    expect(await screen.findAllByRole('rowgroup')).toHaveLength(2);
  });
});
