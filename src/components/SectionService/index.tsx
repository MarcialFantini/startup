"use client";

import Image from "next/image";
import styled from "./styled.module.css";

import srcIcon1 from "../../../public/images/icons web/landing.png";
import srcIcon2 from "../../../public/images/icons web/blog.png";
import srcIcon3 from "../../../public/images/icons web/e-commerce.png";
import { BtnScroll } from "../BtnScroll";
import { useShow } from "@/customHooks/useShow";
import { useEffect, useRef } from "react";

const listArticles = [
  {
    src: srcIcon1,
    title: "Landing page",
    text: "Convierte audiencia en clientes.",
  },
  {
    src: srcIcon2,
    title: "Pagina Empresarial",
    text: "Seguridad y confianza para tu comunidad o empresa.",
  },
  {
    src: srcIcon3,
    title: "Tienda online",
    text: "Vende de manera automática tus productos o cursos.",
  },
];

export const SectionService = () => {
  const ref = useRef(null);

  const { show } = useShow(ref);

  return (
    <section ref={ref} id="serviceId" className={styled.containerSection}>
      <div className={styled.containerArticles}>
        <div className={styled.text}>
          <picture>
            <Image src={""} alt=""></Image>
          </picture>
          <div>
            <p>// 01 . Servicios</p>
            <h2>Servicios de alto impacto.</h2>
          </div>
        </div>
        <div className={styled.articles}>
          {listArticles.map((item, index) => {
            return (
              <article
                style={{ transition: `all 0.3s ${index * 0.6}s` }}
                className={styled.article + " " + (show ? styled.show : "")}
                key={item.title + " " + index}
              >
                <picture className={styled.picture}>
                  <Image
                    className={styled.img}
                    src={item.src}
                    alt={item.title}
                  ></Image>
                </picture>
                <h4 className={styled.title}>{item.title}</h4>
                <p className={styled.textArticle}>{item.text}</p>
                <BtnScroll idElement="contactId" customClass={styled.button}>
                  {" "}
                  Ver más
                </BtnScroll>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
