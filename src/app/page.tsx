import style from "./page.module.css";
import Countdown from "@/components/countdown/countdown";
import ParticlesBackground from "@/components/particles-background";

export default function Home() {
  return (
    <main className={style.main}>
      <ParticlesBackground />
      <Countdown />
    </main>
  );
}
