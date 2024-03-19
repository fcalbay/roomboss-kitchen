import {
  TextInput,
  NumberInput,
  Button,
  Textarea,
  Group,
  Box,
  NativeSelect,
  Stack,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { v4 as uuidv4 } from "uuid";
import useOrderStore from "@/stores/orders.store";
import { MENU } from "@/types/order.type";
import { FormProps, OrderFormType, initialValues } from "./helper";

const Form = ({ onSubmit }: FormProps) => {
  const form = useForm<OrderFormType>({
    initialValues,
    validate: {
      tableNo: (value) => (value.length > 0 ? null : "Table No. is required"),
    },
  });
  const addOrder = useOrderStore((state) => state.addOrder);

  const handleOnSubmit = (values: OrderFormType) => {
    addOrder({ ...values, id: uuidv4(), createdAt: new Date() });
    form.reset();
    onSubmit();
  };

  return (
    <Box maw={500} mx="auto">
      <form onSubmit={form.onSubmit(handleOnSubmit)}>
        <Stack gap="lg">
          <NativeSelect
            withAsterisk
            label="Item"
            {...form.getInputProps("item")}
            data={MENU}
          />

          <NumberInput
            withAsterisk
            label="Quantity"
            min={1}
            {...form.getInputProps("quantity")}
          />

          <TextInput
            withAsterisk
            label="Table No."
            {...form.getInputProps("tableNo")}
          />

          <Textarea
            label="Notes"
            placeholder="..."
            {...form.getInputProps("notes")}
          />

          <Group justify="flex-end" mt="md">
            <Button type="submit">Submit</Button>
          </Group>
        </Stack>
      </form>
    </Box>
  );
};

export default Form;
