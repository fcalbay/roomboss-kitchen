import { screen } from "@testing-library/react";
import { render } from "../../../../test-utils/render";
import Card from "../index";
import useOrderStore from "@/stores/orders.store";

const initialStoreState = useOrderStore.getState();

const renderCard = () => {
  return render(<Card />);
};

describe("Card", () => {
  beforeEach(() => {
    useOrderStore.setState(initialStoreState, true);
    useOrderStore.setState({
      pendingOrders: [
        {
          id: "some-id-0",
          item: "Hamburger",
          quantity: 1,
          tableNo: "1",
          createdAt: new Date(),
        },
        {
          id: "some-id-1",
          item: "Fries",
          quantity: 12,
          tableNo: "1A",
          createdAt: new Date(),
        },
      ],
    });
  });

  test("should render with 2 cards", async () => {
    renderCard();

    // 2 cards
    expect(await screen.findByText(/Hamburger/i)).toBeInTheDocument();
    expect(await screen.findByText(/Fries/i)).toBeInTheDocument();
  });
});
