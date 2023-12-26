import { AboutUs } from "@/components/AboutUs";
import { HomeBanner } from "@/components/HomeBanner";
import { SectionProcces } from "@/components/SectionProcces";
import { SectionService } from "@/components/SectionService";

export default function Home() {
  return (
    <main>
      <HomeBanner></HomeBanner>
      <SectionService></SectionService>
      <AboutUs></AboutUs>
      <SectionProcces></SectionProcces>
    </main>
  );
}
