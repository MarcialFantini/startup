import { BtnScroll } from "../BtnScroll";
import { Button } from "../Button";
import styled from "./styled.module.css";

export const Navbar = () => {
  return (
    <header className={styled.containerNav}>
      <h1 className={styled.title}>Marchu Dev</h1>
      <nav className={styled.navbar}>
        <ul className={styled.listLink}>
          <li>
            <BtnScroll customClass={styled.customBtn} idElement="homeId">
              Inicio
            </BtnScroll>
          </li>
          <li>
            <BtnScroll customClass={styled.customBtn} idElement="serviceId">
              Service
            </BtnScroll>
          </li>
          <li>
            <BtnScroll customClass={styled.customBtn} idElement="nosotrosId">
              Nosotros
            </BtnScroll>
          </li>

          <li>
            <BtnScroll customClass={styled.customBtn} idElement="procesoId">
              Procesos
            </BtnScroll>
          </li>
          <li>
            <BtnScroll customClass={styled.customBtn} idElement="pricesId">
              Precios
            </BtnScroll>
          </li>
          <BtnScroll customClass={styled.customBtn} idElement="contactId" dark>
            Hablemos!
          </BtnScroll>
        </ul>
      </nav>
    </header>
  );
};
