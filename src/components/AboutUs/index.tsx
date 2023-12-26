import Image from "next/image";
import srcPhone from "../../../public/images/about us/Imagephone.svg";
import srcIcon1 from "../../../public/images/about us/Icon.svg";
import srcIcon2 from "../../../public/images/about us/Icon-1.svg";
import srcIcon3 from "../../../public/images/about us/Icon-2.svg";

import styled from "./styled.module.css";

export const AboutUs = () => {
  return (
    <section className={styled.sectionAboutUs}>
      <div className={styled.limitContainer}>
        <picture className={styled.picture}>
          <Image
            className={styled.img}
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
                <p>// 02.ABOUT US</p>
                <h2>The #1 digital marketing services company</h2>
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quod
              qui earum illo odit architecto, alias explicabo ratione
              consequuntur quasi error, neque temporibus quia, consequatur sit
              exercitationem adipisci ex eum.
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
                    The #1 digital marketing services company
                  </h3>
                </div>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure
                  natus quasi maiores a quos, libero dolor dolore repellat omnis
                  molestias excepturi ad esse optio! Dignissimos odit sunt
                  repellendus fugiat cum!
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
                    The #1 digital marketing services company
                  </h3>
                </div>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure
                  natus quasi maiores a quos, libero dolor dolore repellat omnis
                  molestias excepturi ad esse optio! Dignissimos odit sunt
                  repellendus fugiat cum!
                </p>
              </div>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};
