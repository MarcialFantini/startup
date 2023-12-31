import Image from "next/image";
import styled from "./style.module.css";
import { Button } from "../Button";

export const SectionOurPrice = () => {
  return (
    <section className={styled.containerAll}>
      <div className={styled.maxContent}>
        <div className={styled.header}>
          <picture className={styled.iconGreat}>
            <Image src={""} alt=""></Image>
          </picture>
          <p>// 06 . Price & Plan</p>
          <h2>Our Flexible Pricing Plans</h2>
        </div>

        <div className={styled.articles}>
          <article>
            <div className={styled.topArticle}>
              <picture>
                <Image src={""} alt=""></Image>
              </picture>
              <div className={styled.containerTextTop}>
                <h3>Starter</h3>
                <p>$29 </p>
              </div>
            </div>
            <ul>
              <li>Email MarketingContent</li>
              <li>MarketingVoice</li>
              <li>OptimizeSEO</li>
              <li>ConsultingVideo</li>
              <li>MarketingAdvertising</li>
            </ul>
            <Button classCustom={styled.customBtn} dark>
              Contact Me
            </Button>
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
                <h3 style={{ color: "white" }}>Starter</h3>
                <p style={{ color: "white" }}>$29 </p>
              </div>
            </div>
            <ul>
              <li>Email MarketingContent</li>
              <li>MarketingVoice</li>
              <li>OptimizeSEO</li>
              <li>ConsultingVideo</li>
              <li>MarketingAdvertising</li>
            </ul>
            <Button
              classCustom={styled.customBtn + " " + styled.middlePrice}
              dark
            >
              Contact Me
            </Button>
          </article>
          <article>
            <div className={styled.topArticle}>
              <picture>
                <Image src={""} alt=""></Image>
              </picture>
              <div className={styled.containerTextTop}>
                <h3>Starter</h3>
                <p>$29 </p>
              </div>
            </div>
            <ul>
              <li>Email MarketingContent</li>
              <li>MarketingVoice</li>
              <li>OptimizeSEO</li>
              <li>ConsultingVideo</li>
              <li>MarketingAdvertising</li>
            </ul>
            <Button classCustom={styled.customBtn} dark>
              Contact Me
            </Button>
          </article>
        </div>
      </div>
    </section>
  );
};
