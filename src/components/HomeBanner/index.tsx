import Image from "next/image";
import style from "./styled.module.css";
import srcImage from "../../../public/images/headers/Pattern.png";
import { Button } from "../Button";
import { BtnScroll } from "../BtnScroll";

export const HomeBanner = () => {
  return (
    <section id="homeId" className={style.containerSection}>
      <div className={style.containerAll}>
        <article className={style.article}>
          <p className={style.subtitle}>
            <span>//</span> Consultoría de software
          </p>
          <h2 className={style.title}>
            Tu solución <span>digital</span> para abordar tus desafíos.
          </h2>
          <p className={style.text}>
            Desarrollamos soluciones web a medida, diseñadas exclusivamente para
            satisfacer tus requerimientos específicos. Elevamos la presencia
            digital de tu negocio al siguiente nivel, asegurándonos de que cada
            página web refleje tu identidad única y alcance los objetivos que te
            propones.
          </p>
          <div className={style.containerBtn}>
            <BtnScroll idElement="contactId" dark>
              Nuestros servicios
            </BtnScroll>
            <BtnScroll idElement="contactId">Conecta con nosotros!</BtnScroll>
          </div>
        </article>
        <picture className={style.picture}>
          <Image
            className={style.img + " " + style.animationPicture}
            src={srcImage}
            alt="Imagen "
          ></Image>
        </picture>
      </div>
    </section>
  );
};
