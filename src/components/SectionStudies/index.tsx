import Image from "next/image";
import styled from "./styled.module.css";
import { Suspense } from "react";

export const SectionStudies = () => {
  return (
    <section className={styled.sectionAll}>
      <div className={styled.maxSection}>
        <div className={styled.text}>
          <picture>
            <Image src={""} alt=""></Image>
          </picture>
          <div>
            <p>// 04. Soluciones</p>
            <h2>Alto impacto con nuestras soluciones</h2>
          </div>
        </div>

        <article className={styled.article}>
          <div className={styled.drops}>
            <div>
              <h3> Te damos presencia online</h3>
            </div>
            <div>
              <h3>Ahorramos el tiempo en procesos</h3>
            </div>

            <div>
              <h3>Automatizamos tus ventas online</h3>
            </div>
            <div>
              <h3>Te damos una forma clara de comunicación con el cliente</h3>
            </div>
          </div>

          <div className={styled.pictureArticle}>
            <Suspense>
              <video
                autoPlay
                muted
                className={styled.img}
                src={"videos/team.webm"}
              ></video>
            </Suspense>
          </div>
        </article>
      </div>
    </section>
  );
};
