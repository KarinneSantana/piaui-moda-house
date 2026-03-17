import {
  AboutSection,
  BlogSection,
  FaqSection,
  FormSection,
  HeroSection,
  MadeSection,
  OtherSection,
  PartnerSection,
  ScheduleSection,
} from "./sections";
import TimelineSection from "./sections/timeline-section/timeline-section";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      {/* <ScheduleSection /> */}
      <OtherSection />
      <PartnerSection />
      <MadeSection />
      <TimelineSection />
      <FaqSection />
      <FormSection />
      <BlogSection />
    </>
  );
}
