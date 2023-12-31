import Image from "next/image";
import { Button } from "../Button";
import style from "./styled.module.css";

import iconFooter from "../../../public/images/footer/footerIcon.svg";

export const SectionFooter = () => {
  return (
    <footer className={style.sectionFooter}>
      <div className={style.containerMax}>
        <div className={style.containerSubscribe}>
          <div>
            <picture>
              <Image src={""} alt=""></Image>
            </picture>
            <h2 className={style.title}>Promote</h2>
          </div>
          <picture>
            <Image src={iconFooter} alt=""></Image>
          </picture>
          <h3>Subscribe now</h3>
          <p>Industry's standard from dummy and make a type book.</p>
          <input className={style.inputEmail} type="email" />
          <Button classCustom={style.btnCustom} dark>
            Subscribe
          </Button>
        </div>
        <div className={style.textFooter}>
          <div>
            <div>
              <picture>
                <Image src={""} alt=""></Image>
              </picture>
              <h3>Get in touch with</h3>
            </div>
            <p>+543533685147</p>
            <p>marcialfantini@gmail.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
