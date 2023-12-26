import Image from "next/image";
import styled from "./styled.module.css";
export const SectionProcces = () => {
  return (
    <section className={styled.sectionContainer}>
      <div>
        <picture>
          <Image src={""} alt=""></Image>
        </picture>
        <p>//03.PROCESS</p>
      </div>
      <h2>A simple, yet powerful and efficient process</h2>
    </section>
  );
};
