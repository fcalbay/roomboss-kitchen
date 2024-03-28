import { useDeferredValue, useEffect, useState } from 'react';
import { ColorSwatch, Flex } from '@mantine/core';
import { TimerProps, formatStatus } from './helper';
import { formatTime } from '@/utils/time';

const Timer = ({ date }: TimerProps) => {
  const [elapsedSeconds, setElapsedSeconds] = useState<number>(
    Math.floor((new Date().getTime() - date.getTime()) / 1000)
  );
  const deferredSeconds = useDeferredValue(elapsedSeconds);

  useEffect(() => {
    const interval = setInterval(() => {
      setElapsedSeconds((curr) => curr + 1);
    }, 1000);

    return () => clearInterval(interval);
  });

  return (
    <Flex align="center" gap={10}>
      <ColorSwatch color={formatStatus(deferredSeconds)} />
      {formatTime(deferredSeconds)}
    </Flex>
  );
};

export default Timer;
