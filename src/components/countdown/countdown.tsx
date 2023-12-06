"use client";
import style from "./countdown.module.css";
import { useEffect, useState } from "react";
import { calculateTimeLeft, formatTime } from "@/countdown";
import { Mountains_of_Christmas } from "next/font/google";

const christmasFont = Mountains_of_Christmas({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const Countdown: React.FC = () => {
  // const targetDate = new Date("2023-12-25T00:00:00").getTime();

  const [targetDate, setTargetDate] = useState<number>(0);
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));

  useEffect(() => {
    setTargetDate(new Date("2023-12-25T00:00:00").getTime());
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const timer = setInterval(() => {
        setTimeLeft(calculateTimeLeft(targetDate));
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [targetDate]);

  const { days, hours, minutes, seconds } = formatTime(timeLeft);

  return (
    <div className={style.countdown}>
      <h1 className={christmasFont.className}>Countdown to Christmas</h1>
      <span>Days: {days}</span>
      <span>Hours: {hours}</span>
      <span>Minutes: {minutes}</span>
      <span>Seconds: {seconds}</span>
    </div>
  );
};

export default Countdown;
