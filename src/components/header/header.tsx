import style from "./header.module.css";
import { Mountains_of_Christmas, Questrial } from "next/font/google";
import Link from "next/link";

const christmasFont = Mountains_of_Christmas({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const questrial = Questrial({
  subsets: ["latin"],
  weight: ["400"],
});

const Header: React.FC = () => {
  return (
    <header className={style.header}>
      <h1 className={christmasFont.className}>Christmas Countdown</h1>
      <nav className={questrial.className}>
        <Link href="/newyear" className={style.link}>
          NEW YEAR COUNTDOWN
        </Link>
      </nav>
    </header>
  );
};

export default Header;
