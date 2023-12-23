import styled from "./styled.module.css";

export const Button = ({
  dark,
  children,
  classCustom,
}: {
  dark?: boolean;
  classCustom?: string;
  children: string;
}) => {
  return (
    <button
      className={
        styled.btn + " " + (dark ? styled.dark : "") + " " + classCustom
      }
    >
      {children}
    </button>
  );
};
