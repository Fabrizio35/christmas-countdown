"use client";
import style from "./countdown.module.css";
import { useEffect, useState } from "react";
import { calculateTimeLeft, formatTime } from "@/utils/countdown";
import { Questrial, Work_Sans } from "next/font/google";
import Header from "../header/header";
import Form from "../form/form";
import Image from "next/image";
import { images } from "@/utils/images";

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
  const [countdownFinished, setCountdownFinished] = useState<boolean>(false);

  useEffect(() => {
    setTargetDate(new Date("2023-12-25T00:00:00").getTime());
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const timer = setInterval(() => {
        const newTimeLeft = calculateTimeLeft(targetDate);
        setTimeLeft(newTimeLeft);

        if (newTimeLeft <= 0) {
          setCountdownFinished(true);
          clearInterval(timer);
        }
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
    <main className={style.countdown}>
      <Header />
      <section className={`${style.timeContainer} ${questrial.className}`}>
        {dataFields.map((field) => (
          <article key={field.id}>
            <div className={style.numberContainer}>
              {field.content.map((digit, index) => (
                <div key={index} className={style.number}>
                  <Image
                    src={images.snowCap}
                    alt="snow-cap"
                    className={style.snowCap}
                  />
                  <span>{digit}</span>
                </div>
              ))}
            </div>
            <h3 className={style.timeTitle}>{field.label}</h3>
          </article>
        ))}

        <div className={style.separationContainer}>
          {dataFields.map(
            (_, index) =>
              index < dataFields.length - 1 && (
                <span key={index} className={style.separation}>
                  :
                </span>
              )
          )}
        </div>
      </section>

      <h2
        className={`${workSans.className} ${style.mainTitle} ${
          countdownFinished ? style.neonText : null
        }`}
      >
        {countdownFinished ? "MERRY CHRISTMAS" : "TO CHRISTMAS"}
      </h2>

      <Form />

      <Image
        src={images.rudolf}
        alt="rudolf"
        className={style.rudolf}
        priority
      />

      <Image
        src={images.santa}
        alt="santa-claus"
        className={style.santa}
        priority
      />

      <Image
        src={images.reindeer}
        alt="reindeer-and-snowman"
        className={style.reindeer}
        priority
      />
    </main>
  );
};

export default Countdown;
