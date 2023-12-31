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
            <p>// 01 . Services</p>
            <h2>
              High-impact services to take your business to the next level
            </h2>
          </div>
        </div>

        <article className={styled.article}>
          <div className={styled.drops}>
            <div>
              <h3> Resolvemos tus problemas</h3>
            </div>
            <div>
              <h3>Ahorramos el tiempo de tu empresas</h3>
            </div>

            <div>
              <h3>Creamos tu visibilidad en internet</h3>
            </div>
            <div>
              <h3>Creamos la tienda online que necesitas</h3>
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
