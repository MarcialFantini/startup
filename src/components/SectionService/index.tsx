import Image from "next/image";
import styled from "./styled.module.css";
import { Button } from "../Button";

import srcIcon1 from "../../../public/images/icons web/landing.png";
import srcIcon2 from "../../../public/images/icons web/blog.png";
import srcIcon3 from "../../../public/images/icons web/e-commerce.png";
import { BtnScroll } from "../BtnScroll";

const listArticles = [
  {
    src: srcIcon1,
    title: "Landing page",
    text: "Optimizada para captar clientes, perfecto complemento de una campaña de marketing",
  },
  {
    src: srcIcon2,
    title: "Pagina Empresarial",
    text: "Ideal para generar presencia, credibilidad y comunicación con clientes",
  },
  {
    src: srcIcon3,
    title: "Tienda online",
    text: "Vende tus productos de manera online, disponible 24/7 y felicidad de gestión de inventarios",
  },
];

export const SectionService = () => {
  return (
    <section id="serviceId" className={styled.containerSection}>
      <div className={styled.containerArticles}>
        <div className={styled.text}>
          <picture>
            <Image src={""} alt=""></Image>
          </picture>
          <div>
            <p>// 01 . Servicios</p>
            <h2>
              Nuestros servicios de alto impacto para llevar tu negocio al
              siguiente nivel.
            </h2>
          </div>
        </div>
        <div className={styled.articles}>
          {listArticles.map((item, index) => {
            return (
              <article
                className={styled.article}
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
                  Reed More
                </BtnScroll>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
