export const formatStatus = (elapsedSeconds: number) => {
  if (elapsedSeconds <= 15) {
    return "#00CA4E";
  }

  if (elapsedSeconds <= 30) {
    return "#FFBD44";
  }

  return "#FF605C";
};

export interface TimerProps {
  date: Date;
}
