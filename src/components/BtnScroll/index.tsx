"use client";
import style from "./style.module.css";

export const BtnScroll = ({
  children,
  dark,
  customClass,
  idElement,
}: {
  children: any;
  dark?: boolean;
  customClass?: string;
  idElement: string;
}) => {
  const handlerToScroll = () => {
    const element = document.getElementById(idElement);

    if (!element) {
      return;
    }

    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button
      onClick={handlerToScroll}
      className={
        style.btn + " " + (dark ? style.dark : "") + "  " + customClass
      }
    >
      {children}
    </button>
  );
};
