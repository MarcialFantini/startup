import { AboutUs } from "@/components/AboutUs";
import { HomeBanner } from "@/components/HomeBanner";

import { SectionOurPrice } from "@/components/SectionOurPrice";
import { SectionProcces } from "@/components/SectionProcces";
import { SectionService } from "@/components/SectionService";
import { SectionStudies } from "@/components/SectionStudies";

export default function Home() {
  return (
    <main>
      <HomeBanner></HomeBanner>
      <SectionService></SectionService>
      <AboutUs></AboutUs>
      <SectionProcces></SectionProcces>
      <SectionStudies></SectionStudies>
      <SectionOurPrice></SectionOurPrice>
    </main>
  );
}
