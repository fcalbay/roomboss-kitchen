export const formatTime = (elapsedSeconds: number) => {
  const hours = Math.floor(elapsedSeconds / 3600);
  const formattedHours = `${hours}`.padStart(2, "0");

  const minutes = Math.floor((elapsedSeconds % 3600) / 60);
  const formattedMinutes = `${minutes}`.padStart(2, "0");

  const seconds = Math.floor(elapsedSeconds % 60);
  const formattedSeconds = `${seconds}`.padStart(2, "0");

  return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
};
