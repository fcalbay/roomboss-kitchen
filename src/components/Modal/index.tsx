import { useDisclosure } from '@mantine/hooks';
import { Button, Modal, Center } from '@mantine/core';
import Form from '@/components/Form';

const OrderModal = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <Center>
      <Modal
        opened={opened}
        onClose={close}
        title="New Order"
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 3,
        }}
      >
        <Form onSubmit={close} />
      </Modal>

      <Button onClick={open}>New Order</Button>
    </Center>
  );
};

export default OrderModal;
