import { Order } from "@/types/order.type";

export type OrderFormType = Omit<Order, "id" | "createdAt">;

export const initialValues: OrderFormType = {
  item: "Hamburger",
  quantity: 1,
  tableNo: "",
};

export interface FormProps {
  onSubmit: () => void;
}
