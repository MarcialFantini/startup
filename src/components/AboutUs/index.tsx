import Image from "next/image";
import srcPhone from "../../../public/images/about us/Imagephone.svg";
import srcIcon1 from "../../../public/images/about us/Icon.svg";
import srcIcon2 from "../../../public/images/about us/Icon-1.svg";
import srcIcon3 from "../../../public/images/about us/Icon-2.svg";

import styled from "./styled.module.css";

export const AboutUs = () => {
  return (
    <section id="nosotrosId" className={styled.sectionAboutUs}>
      <div className={styled.limitContainer}>
        <picture className={styled.picture}>
          <Image
            className={styled.img + " " + styled.animationPicture}
            alt="phone great"
            src={srcPhone}
          ></Image>
        </picture>
        <article>
          <div className={styled.rowHead}>
            <div className={styled.row}>
              <picture>
                <Image
                  className={styled.imgIcon}
                  alt="@ great"
                  src={srcIcon1}
                ></Image>
              </picture>
              <div>
                <p>// 02. Nosotros</p>
                <h2>Programadores dedicados</h2>
              </div>
            </div>
            <p>
              Especializados en distintas areas desde diseño a bases de datos,
              nuestro equipo de especialista es perfecto en nuestros servicios.
            </p>
          </div>

          <ul className={styled.list}>
            <li>
              <picture>
                <Image
                  className={styled.imgIcon}
                  alt="@ great"
                  src={srcIcon2}
                ></Image>
              </picture>
              <div>
                <div>
                  <h3 className={styled.subTitle}>
                    Equipo profesional altamente especializado
                  </h3>
                </div>
                <p>
                  Especializo en paginas de presentación, paginas empresariales
                  y tiendas online.
                </p>
              </div>
            </li>
            <li>
              <picture>
                <Image
                  className={styled.imgIcon}
                  alt="@ great"
                  src={srcIcon3}
                ></Image>
              </picture>
              <div>
                <div>
                  <h3 className={styled.subTitle}>
                    Servicio personalizado a tu medida
                  </h3>
                </div>
                <p>
                  Cada pagina esta diseñada a base de cada cliente y necesidad.
                </p>
              </div>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};
