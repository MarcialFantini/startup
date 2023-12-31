"use client";
import Image from "next/image";
import styled from "./styled.module.css";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

import principalIcon from "../../../public/images/iconsProcess/principalIcon.svg";
import icon1 from "../../../public/images/iconsProcess/icon1.svg";
import icon2 from "../../../public/images/iconsProcess/icon2.svg";
import icon3 from "../../../public/images/iconsProcess/icon3.svg";
import { HTMLAttributes, useEffect, useRef, useState } from "react";

interface ProcessArticleInterface {
  srcImage: string | StaticImport;
  title: string;
  text: string;
}

const listProcess: ProcessArticleInterface[] = [
  {
    srcImage: icon1,
    title: "Marketing Plan",
    text: "consectetur amet dolor sit comeneer ilremsilom dolce issilm acalrm ",
  },
  {
    srcImage: icon2,
    title: "Marketing Plan",
    text: "consectetur amet dolor sit comeneer ilremsilom dolce issilm acalrm ",
  },
  {
    srcImage: icon3,
    title: "Marketing Plan",
    text: "consectetur amet dolor sit comeneer ilremsilom dolce issilm acalrm ",
  },
];

export const SectionProcces = () => {
  const [dist, setDist] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      const itemFirst = document.getElementById("primero");
      const itemLast = document.getElementById("ultimo");

      if (itemFirst && itemLast) {
        const distanciaEntreElementos =
          itemLast.offsetTop - itemFirst.offsetTop;
        console.log(
          'La distancia entre los elementos "primero" y "ultimo" es: ' +
            distanciaEntreElementos +
            " píxeles."
        );

        setDist(distanciaEntreElementos + 200);
      }
    }, 200);
  }, []);
  return (
    <section className={styled.sectionContainer}>
      <div className={styled.header}>
        <picture className={styled.iconGreat}>
          <Image src={principalIcon} alt=""></Image>
        </picture>
        <p>//03.PROCESS</p>
        <h2>A simple, yet powerful and efficient process</h2>
      </div>

      <div className={styled.containerArticles}>
        <div style={{ height: dist }} className={styled.line}></div>
        <article className={styled.article}>
          <picture className={styled.picture}>
            <Image
              className={styled.img}
              alt={listProcess[0].title}
              src={listProcess[0].srcImage}
            ></Image>
          </picture>

          <div id="primero" className={styled.number}>
            1
          </div>
          <div className={styled.containerText}>
            <h3>{listProcess[0].title}</h3>
            <p>{listProcess[0].text}</p>
          </div>
        </article>
        <article className={styled.article}>
          <div className={styled.containerText}>
            <h3>{listProcess[1].title}</h3>
            <p>{listProcess[1].text}</p>
          </div>
          <div className={styled.number}>2</div>

          <picture className={styled.picture}>
            <Image
              className={styled.img}
              alt={listProcess[1].title}
              src={listProcess[1].srcImage}
            ></Image>
          </picture>
        </article>
        <article className={styled.article}>
          <picture className={styled.picture}>
            <Image
              className={styled.img}
              alt={listProcess[2].title}
              src={listProcess[2].srcImage}
            ></Image>
          </picture>

          <div id="ultimo" className={styled.number}>
            3
          </div>
          <div className={styled.containerText}>
            <h3>{listProcess[2].title}</h3>
            <p>{listProcess[2].text}</p>
          </div>
        </article>
      </div>
    </section>
  );
};
