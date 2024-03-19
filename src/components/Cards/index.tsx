import { Button, Card, Flex, Group, Stack, Text } from "@mantine/core";
import useOrderStore from "@/stores/orders.store";
import Timer from "@/components/Timer";
import { Order } from "@/types/order.type";

const OrderCards = () => {
  const orders = useOrderStore((state) => state.pendingOrders);
  const completeOrder = useOrderStore((state) => state.completeOrder);

  const handleCompleteOrder = (completedOrder: Order) => {
    completeOrder(completedOrder);
  };

  const rows = orders.map((order) => {
    const { item, quantity, tableNo, notes, createdAt, id } = order;

    return (
      <Card key={id} withBorder shadow="sm" radius="md">
        <Card.Section inheritPadding py="xs">
          <Group justify="space-between">
            <Text fw={500}>
              {item} ({quantity})
            </Text>
            <Text
              fw={500}
              style={{ textOverflow: "ellipsis", overflow: "hidden" }}
              maw={100}
              visibleFrom="xs"
            >
              {tableNo}
            </Text>
            <Timer date={createdAt} />
          </Group>
        </Card.Section>
        <Card.Section inheritPadding py="xs" hiddenFrom="xs">
          <Text
            fw={500}
            style={{ textOverflow: "ellipsis", overflow: "hidden" }}
          >
            {tableNo}
          </Text>
        </Card.Section>
        {notes && (
          <Card.Section inheritPadding py="xs" bg="white" color="black">
            <Text
              fw={300}
              c="black"
              style={{ textOverflow: "ellipsis", overflow: "hidden" }}
            >
              {notes}
            </Text>
          </Card.Section>
        )}
        <Card.Section inheritPadding py="xs" bg="white" color="black">
          <Flex justify="end">
            <Button
              bg="green"
              size="sm"
              onClick={() => handleCompleteOrder(order)}
            >
              Complete
            </Button>
          </Flex>
        </Card.Section>
      </Card>
    );
  });

  return <Stack gap="lg">{rows}</Stack>;
};

export default OrderCards;
