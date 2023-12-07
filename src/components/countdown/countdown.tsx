"use client";
import style from "./countdown.module.css";
import { useEffect, useState } from "react";
import { calculateTimeLeft, formatTime } from "@/countdown";
import { Questrial, Work_Sans } from "next/font/google";
import Header from "../header/header";
import Form from "../form/form";
import Image from "next/image";
import image1 from "../../../public/images/image-1.png";
import snow from "../../../public/images/snow-image.png";

const questrial = Questrial({
  subsets: ["latin"],
  weight: ["400"],
});

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["500", "600"],
});

const Countdown: React.FC = () => {
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

  const dataFields = [
    { id: 1, label: "DAYS", content: days },
    { id: 2, label: "HOURS", content: hours },
    { id: 3, label: "MINUTES", content: minutes },
    { id: 4, label: "SECONDS", content: seconds },
  ];

  return (
    <div className={style.countdown}>
      <Header />
      <section className={`${style.timeContainer} ${questrial.className}`}>
        {dataFields.map((field) => (
          <article key={field.id}>
            {field.content.map((digit, index) => (
              <div key={index} className={style.numberContainer}>
                <Image src={snow} alt="snow" className={style.snow} />
                <span>{digit}</span>
              </div>
            ))}
          </article>
        ))}
      </section>

      <div className={style.separationContainer}>
        {dataFields.map(
          (_, index) =>
            index < dataFields.length - 1 && (
              <span key={index} className={style.timeSeparation}>
                :
              </span>
            )
        )}
      </div>

      <div className={style.fieldsTitleContainer}>
        {dataFields.map((field) => (
          <h3 key={field.id}>{field.label}</h3>
        ))}
      </div>

      <h2 className={workSans.className}>TO CHRISTMAS</h2>

      <Form />

      <Image src={image1} alt="image-1" className={style.image1} />
    </div>
  );
};

export default Countdown;
