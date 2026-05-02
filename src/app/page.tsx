import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import AboutPreview from "@/components/home/AboutPreview";
import ProblemSection from "@/components/home/ProblemSection";
import ServicesPreview from "@/components/home/ServicesPreview";
import ProcessSection from "@/components/home/ProcessSection";
import Testimonials from "@/components/home/Testimonials";
import CommunitySection from "@/components/home/CommunitySection";
import CTASection from "@/components/layout/CTASection";

export const metadata: Metadata = {
  title: "Home | Freedom Inner Wellbeing",
  description:
    "Premium emotional healing and psychology coaching for professionals. Overcome anxiety, overthinking, and emotional triggers through structured transformation.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <ProblemSection />
      <ServicesPreview />
      <ProcessSection />
      <Testimonials />
      <CommunitySection />
      <CTASection />
    </>
  );
}
