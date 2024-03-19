import { fireEvent, screen } from '@testing-library/react';
import { render } from '../../../../test-utils/render';
import Form from '../index';
import useOrderStore from '@/stores/orders.store';

const initialStoreState = useOrderStore.getState();

const renderForm = (onSubmit: () => void) => {
  return render(<Form onSubmit={onSubmit} />);
};

describe('Form', () => {
  const mockedOnSubmit = vi.fn();
  beforeEach(() => {
    useOrderStore.setState(initialStoreState, true);
    vi.resetAllMocks();
  });

  test('should render form', async () => {
    renderForm(mockedOnSubmit);

    const select = await screen.findByRole('combobox');
    expect(select).toBeInTheDocument();

    const inputs = await screen.findAllByRole('textbox');
    expect(inputs).toHaveLength(3);

    const submit = await screen.findByRole('button');
    expect(submit).toBeInTheDocument();
  });

  test('should add order correctly', async () => {
    renderForm(mockedOnSubmit);

    let currentState = useOrderStore.getState();
    expect(currentState.pendingOrders).toHaveLength(0);

    const select = await screen.findByRole('combobox');
    const inputs = await screen.findAllByRole('textbox');
    const submit = await screen.findByRole('button');

    fireEvent.change(select, { target: { value: 'Hamburger' } });
    fireEvent.change(inputs[0], { target: { value: 12 } });
    fireEvent.change(inputs[1], { target: { value: 'table 1' } });
    fireEvent.change(inputs[2], { target: { value: 'some random note here' } });

    fireEvent.click(submit);

    currentState = useOrderStore.getState();
    expect(currentState.pendingOrders).toHaveLength(1);
    expect(currentState.pendingOrders[0].item).toEqual('Hamburger');
    expect(currentState.pendingOrders[0].quantity).toEqual(12);
    expect(currentState.pendingOrders[0].tableNo).toEqual('table 1');
    expect(currentState.pendingOrders[0].notes).toEqual('some random note here');

    expect(mockedOnSubmit).toHaveBeenCalledOnce();
  });
});
