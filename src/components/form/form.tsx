import style from "./form.module.css";
import { Questrial } from "next/font/google";
import { useState } from "react";

const questrial = Questrial({
  subsets: ["latin"],
  weight: ["400"],
});

const Form: React.FC = () => {
  const [input, setInput] = useState<string>("");

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setInput("");
  };

  return (
    <form onSubmit={submitHandler} className={style.form}>
      <input
        type="text"
        name="christmas-wish"
        id="christmas-wish"
        placeholder="What's your Christmas wish?"
        autoComplete="off"
        className={questrial.className}
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button className={`${style.buttonForm} ${questrial.className}`}>
        <span>TELL SANTA</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-arrow-right-tail"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M18 15l3 -3l-3 -3" />
          <path d="M3 15l3 -3l-3 -3" />
          <path d="M6 12l15 0" />
        </svg>
      </button>
    </form>
  );
};

export default Form;
