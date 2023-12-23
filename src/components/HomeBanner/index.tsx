import Image from "next/image";
import style from "./styled.module.css";
import srcImage from "../../../public/images/headers/Pattern.png";
import { Button } from "../Button";

export const HomeBanner = () => {
  return (
    <section className={style.containerSection}>
      <div className={style.containerAll}>
        <article className={style.article}>
          <p className={style.subtitle}>
            <span>//</span> Agency
          </p>
          <h2 className={style.title}>
            A fully integrated digital <span>marketing</span> Agency
          </h2>
          <p className={style.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
            corporis aliquid odit dicta alias architecto iste recusandae
            explicabo fugiat, aperiam saepe officiis veritatis velit enim,
            voluptas consectetur molestias culpa quaerat.
          </p>
          <div className={style.containerBtn}>
            <Button dark>Our Services</Button>
            <Button>Get Started</Button>
          </div>
        </article>
        <picture className={style.picture}>
          <Image className={style.img} src={srcImage} alt="Imagen "></Image>
        </picture>
      </div>
    </section>
  );
};
