import Image from "next/image";
import styled from "./styled.module.css";
import { Button } from "../Button";

import srcIcon1 from "../../../public/images/icons web/landing.png";
import srcIcon2 from "../../../public/images/icons web/blog.png";
import srcIcon3 from "../../../public/images/icons web/e-commerce.png";

const listArticles = [
  {
    src: srcIcon1,
    title: "Landing page",
    text: "Lorem ipsum dolor sit amet, ea mundi malorum cum, ocurreret reprehendunt. ",
  },
  {
    src: srcIcon2,
    title: "Empresarial page",
    text: "Lorem ipsum dolor sit amet, ea mundi malorum cum, ocurreret reprehendunt. ",
  },
  {
    src: srcIcon3,
    title: "Ecommerce page",
    text: "Lorem ipsum dolor sit amet, ea mundi malorum cum, ocurreret reprehendunt. ",
  },
];

export const SectionService = () => {
  return (
    <section className={styled.containerSection}>
      <div className={styled.containerArticles}>
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
                <h4>{item.title}</h4>
                <p>{item.text}</p>
                <Button classCustom={styled.button}> Reed More</Button>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
