import Image from "next/image";
import styled from "./styled.module.css";
import srcPhoto from "../../../public/images/studies/Photo.jpg";

export const SectionStudies = () => {
  return (
    <section className={styled.sectionAll}>
      <div className={styled.maxSection}>
        <div className={styled.text}>
          <picture>
            <Image src={""} alt=""></Image>
          </picture>
          <div>
            <p>// 05. Soluciones</p>
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
          <picture className={styled.pictureArticle}>
            <Image className={styled.img} alt="" src={srcPhoto}></Image>
          </picture>
        </article>
      </div>
    </section>
  );
};
