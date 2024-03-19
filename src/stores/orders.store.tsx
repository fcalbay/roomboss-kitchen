import { create } from "zustand";
import { CompletedOrder, Order } from "@/types/order.type";

interface OrderState {
  pendingOrders: Order[];
  completedOrders: CompletedOrder[];
  addOrder: (order: Order) => void;
  completeOrder: (completedOrder: Order) => void;
}

const useOrderStore = create<OrderState>((set) => ({
  pendingOrders: [],
  completedOrders: [],
  addOrder: (order: Order) =>
    set((state) => ({ pendingOrders: [...state.pendingOrders, order] })),
  completeOrder: (completedOrder: Order) =>
    set((state) => ({
      pendingOrders: state.pendingOrders.filter(
        ({ id }) => id !== completedOrder.id,
      ),
      completedOrders: [
        ...state.completedOrders,
        { ...completedOrder, completedOn: new Date() },
      ],
    })),
}));

export default useOrderStore;
