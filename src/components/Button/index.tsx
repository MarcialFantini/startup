import Link from "next/link";
import styled from "./styled.module.css";

export const Button = ({
  dark,
  children,
  classCustom,
  href,
  targetAtr,
}: {
  href?: string;
  dark?: boolean;
  targetAtr?: string;
  classCustom?: string;
  children: any;
}) => {
  return (
    <Link
      href={href ? href : "/"}
      target={targetAtr ? targetAtr : "_blank"}
      className={
        styled.btn + " " + (dark ? styled.dark : "") + " " + classCustom
      }
    >
      {children}
    </Link>
  );
};
