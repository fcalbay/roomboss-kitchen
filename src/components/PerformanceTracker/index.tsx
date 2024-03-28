import { Center } from '@mantine/core';
import useOrderStore from '@/stores/orders.store';
import { CompletedOrder } from '@/types/order.type';
import { formatTime } from '@/utils/time';

const PerformanceTracker = () => {
  const orders = useOrderStore((state) => state.completedOrders);

  const computeAverageCompletionTime = () => {
    if (orders.length === 0) return 0;

    const totalCompletionTime = orders.reduce((acc: number, curr: CompletedOrder) => {
      if (!curr.completedOn) return acc;
      const totalWaitTime = (curr.completedOn.getTime() - curr.createdAt.getTime()) / 1000;
      return acc + totalWaitTime;
    }, 0);

    return totalCompletionTime / orders.length;
  };

  return <Center>Average Completion Time: {formatTime(computeAverageCompletionTime())}</Center>;
};

export default PerformanceTracker;
