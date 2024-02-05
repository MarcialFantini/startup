import Image from "next/image";
import styled from "./style.module.css";
import { Button } from "../Button";
import { BtnScroll } from "../BtnScroll";

export const SectionOurPrice = () => {
  return (
    <section id="pricesId" className={styled.containerAll}>
      <div className={styled.maxContent}>
        <div className={styled.header}>
          <picture className={styled.iconGreat}>
            <Image src={""} alt=""></Image>
          </picture>
          <p>// 05 . Paquetes y precios</p>
          <h2>Paquetes flexibles que necesitas para tu empresa</h2>
        </div>

        <div className={styled.articles}>
          <article>
            <div className={styled.topArticle}>
              <picture>
                <Image src={""} alt=""></Image>
              </picture>
              <div className={styled.containerTextTop}>
                <h3>Básico</h3>
                <p>$400 </p>
              </div>
            </div>
            <ul>
              <li>Pagina principal</li>
              <li>
                Páginas web con diseño personalizado y responsivo para ser visto
                en celulares y tablet
              </li>
              <li>Formulario de contacto</li>
              <li>Galerías de imágenes </li>
              <li>Videos de YouTube</li>

              <li>Botones de redirección de WhatsApp </li>
              <li>Botones de redes sociales </li>

              <li>Sistema auto gestionado</li>
            </ul>
            <BtnScroll
              idElement="contactId"
              customClass={styled.customBtn}
              dark
            >
              Hablemos!
            </BtnScroll>
          </article>
          <article
            style={{ background: "#292930", color: "white" }}
            className={styled.middleCard}
          >
            <div className={styled.topArticle}>
              <picture>
                <Image src={""} alt=""></Image>
              </picture>
              <div className={styled.containerTextTop}>
                <h3 style={{ color: "white" }}>Empresarial</h3>
                <p style={{ color: "white" }}>$800 </p>
              </div>
            </div>
            <ul>
              <li>Pagina principal</li>
              <li>Hasta 3 Sub Paginas </li>
              <li>
                Páginas web con diseño personalizado y responsivo para ser visto
                en celulares y tablet
              </li>
              <li>Formulario de contacto</li>
              <li>Galerías de imágenes </li>
              <li>Videos de YouTube</li>

              <li>Botones de redirección de WhatsApp </li>
              <li>Botones de redes sociales </li>

              <li>Sistema auto gestionado</li>
              <li>Sistema de publicación de contenido auto-administrable </li>
            </ul>
            <BtnScroll
              idElement="contactId"
              customClass={styled.customBtn + " " + styled.middlePrice}
              dark
            >
              Contact Me
            </BtnScroll>
          </article>
          <article>
            <div className={styled.topArticle}>
              <picture>
                <Image src={""} alt=""></Image>
              </picture>
              <div className={styled.containerTextTop}>
                <h3>Tienda online</h3>
                <p>$1200 </p>
              </div>
            </div>
            <ul>
              <li>Pagina principal</li>
              <li>Hasta 5 Sub Paginas </li>
              <li>
                Páginas web con diseño personalizado y responsivo para ser visto
                en celulares y tablet
              </li>
              <li>Formulario de contacto</li>
              <li>Galerías de imágenes </li>
              <li>Videos de YouTube</li>

              <li>Botones de redirección de WhatsApp </li>
              <li>Botones de redes sociales </li>

              <li>Sistema auto gestionado</li>
              <li>Sistema de publicación de contenido auto-administrable </li>
              <li>Sistema de inventario</li>
              <li>Sistema de ventas auto-gestionado.</li>
            </ul>
            <BtnScroll
              idElement="contactId"
              customClass={styled.customBtn}
              dark
            >
              Contact Me
            </BtnScroll>
          </article>
        </div>
      </div>
    </section>
  );
};
