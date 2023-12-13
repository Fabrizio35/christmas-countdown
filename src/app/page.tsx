import style from "./page.module.css";
import Countdown from "@/components/countdown/countdown";
import SnowParticles from "@/components/particles/snow-particles";
import Image from "next/image";
import { images } from "@/utils/images";

export default function Home() {
  return (
    <div className={style.main}>
      <SnowParticles />
      <Countdown />
      <Image
        src={images.background}
        alt="image-3"
        className={style.image3}
        priority
      />
    </div>
  );
}
