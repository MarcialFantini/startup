import Image from "next/image";
import { Button } from "../Button";
import style from "./styled.module.css";

import iconFooter from "../../../public/images/footer/footerIcon.svg";

export const SectionFooter = () => {
  return (
    <footer id="contactId" className={style.sectionFooter}>
      <div className={style.containerMax}>
        <div className={style.principal}>
          <h2 className={style.title}>//Contacto</h2>

          <picture>
            <Image src={iconFooter} alt=""></Image>
          </picture>
          <h3>Hablemos!</h3>
          <p>Nosotros llevamos al proximo nivel tu negocio</p>
        </div>
        <div className={style.secondary}>
          <div>
            <picture>
              <Image src={""} alt=""></Image>
            </picture>
            <h3 className={style.titleContacto}>Comunícate!</h3>
          </div>
          <a
            href="tel:+543533685147"
            className={style.btnCustom + " " + style.anchor}
          >
            <p className={style.number}>+543533685147</p>
          </a>
          <a href="mailto:ejemplo@correo.com" className={style.email}>
            marcialfantini@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
};
