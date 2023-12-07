interface Time {
  days: string[];
  hours: string[];
  minutes: string[];
  seconds: string[];
}

export const calculateTimeLeft = (targetDate: number): number => {
  const now = new Date().getTime();
  const difference = targetDate - now;
  return difference > 0 ? difference : 0;
};

export const formatTime = (milliseconds: number): Time => {
  const seconds = Math.floor((milliseconds / 1000) % 60);
  const minutes = Math.floor((milliseconds / (1000 * 60)) % 60);
  const hours = Math.floor((milliseconds / (1000 * 60 * 60)) % 24);
  const days = Math.floor(milliseconds / (1000 * 60 * 60 * 24));

  const formatWithZero = (value: number): string[] => {
    const stringValue = value < 10 ? `0${value}` : `${value}`;

    return stringValue.split("");
  };

  return {
    days: formatWithZero(days),
    hours: formatWithZero(hours),
    minutes: formatWithZero(minutes),
    seconds: formatWithZero(seconds),
  };
};
