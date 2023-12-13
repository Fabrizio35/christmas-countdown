import style from "./header.module.css";
import { Mountains_of_Christmas } from "next/font/google";

const christmasFont = Mountains_of_Christmas({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const Header: React.FC = () => {
  return (
    <header className={style.header}>
      <h1 className={christmasFont.className}>Christmas Countdown</h1>
    </header>
  );
};

export default Header;
