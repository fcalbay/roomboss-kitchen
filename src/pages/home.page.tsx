import { Box, Stack, em } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import OrderCards from "@/components/Cards";
import OrderModal from "@/components/Modal";
import PerformanceTracker from "@/components/PerformanceTracker";
import Table from "@/components/Table";

const Home = () => {
  const isMobile = useMediaQuery(`(max-width: ${em(750)})`);
  return (
    <Box p={20}>
      <Stack gap="lg">
        <OrderModal />
        <PerformanceTracker />
        {!isMobile && <Table />}
        {isMobile && <OrderCards />}
      </Stack>
    </Box>
  );
};

export default Home;
