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
                <p>// 02.Sobre nosotros</p>
                <h2>Programadores dedicados a desarrollar tu negocio online</h2>
              </div>
            </div>
            <p>
              Creamos lo que necesitas para llevar a cabo una marca en la web,
              llegando a más personas,aumentamos la posibilidad de consolidar
              nuevos clientes, redirigiendo trafico desde tus redes sociales a
              una plataforma solida online, operando 24/7 para cumplir tus
              objetivos de tu negocio.
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
                  Nuestro equipo de desarrolladores se especializo en paginas de
                  presentación, paginas empresariales y tiendas online.
                </p>
                <p>
                  Podemos llevar a cabo más soluciones pero nuestros principales
                  servicios son esos.
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
                  Nuestros servicios son ideales para empresas que recién están
                  comenzado a modernizarse y a empresas que quieren llegar al
                  siguiente nivel.
                </p>
              </div>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};
