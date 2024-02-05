"use client";
import Image from "next/image";
import style from "./styled.module.css";
import srcImage from "../../../public/images/headers/Pattern.png";

import { BtnScroll } from "../BtnScroll";
import { useShow } from "@/customHooks/useShow";
import { useRef } from "react";

export const HomeBanner = () => {
  const ref = useRef(null);

  const { show } = useShow(ref);

  return (
    <section ref={ref} id="homeId" className={style.containerSection}>
      <div className={style.containerAll}>
        <article className={style.article + " " + (show ? style.show : "")}>
          <p className={style.subtitle}>
            <span>//</span> Consultoría de software
          </p>
          <h2 className={style.title}>
            Tu solución <span>para abordar tus desafíos.</span>
          </h2>
          <p className={style.text}>
            Desarrollamos soluciones web a medida, completando tu estrategia de
            marketing.
          </p>
          <div className={style.containerBtn}>
            <BtnScroll idElement="contactId" dark>
              Nuestros servicios
            </BtnScroll>
            <BtnScroll idElement="contactId">Conecta con nosotros!</BtnScroll>
          </div>
        </article>
        <picture className={style.picture + " " + (show ? style.show : "")}>
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
