import { Box, Button, Table, Text } from "@mantine/core";
import useOrderStore from "@/stores/orders.store";
import Timer from "../Timer";
import { Order } from "@/types/order.type";

const OrdersTable = () => {
  const orders = useOrderStore((state) => state.pendingOrders);
  const completeOrder = useOrderStore((state) => state.completeOrder);

  const handleCompleteOrder = (completedOrder: Order) => {
    completeOrder(completedOrder);
  };

  const rows = orders.map((order) => {
    const { item, quantity, tableNo, notes, createdAt, id } = order;
    return (
      <Table.Tr key={id}>
        <Table.Td maw={100}>{item}</Table.Td>
        <Table.Td maw={100}>{quantity}</Table.Td>
        <Table.Td maw={200}>
          <Text style={{ textOverflow: "ellipsis", overflow: "hidden" }}>
            {tableNo}
          </Text>
        </Table.Td>
        <Table.Td maw={200}>
          <Text style={{ textOverflow: "ellipsis", overflow: "hidden" }}>
            {notes}
          </Text>
        </Table.Td>
        <Table.Td maw={100}>
          <Timer date={createdAt} />
        </Table.Td>
        <Table.Td align="right">
          <Button
            bg="green"
            size="sm"
            onClick={() => handleCompleteOrder(order)}
          >
            Complete
          </Button>
        </Table.Td>
      </Table.Tr>
    );
  });

  return (
    <Box mx="sm">
      <Table striped highlightOnHover>
        <Table.Thead>
          <Table.Tr>
            <Table.Th maw={100}>Item</Table.Th>
            <Table.Th maw={100}>Quantity</Table.Th>
            <Table.Th maw={200}>Table No.</Table.Th>
            <Table.Th maw={200}>Notes</Table.Th>
            <Table.Th maw={100}>Time</Table.Th>
            <Table.Th></Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </Box>
  );
};

export default OrdersTable;
