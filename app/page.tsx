import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Problem } from "@/components/problem";
import { Services } from "@/components/services";
import { Process } from "@/components/process";
import { Testimonials } from "@/components/testimonials";
import { Community } from "@/components/community";
import { FAQ } from "@/components/faq";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <About />
      <Problem />
      <Services />
      <Process />
      <Testimonials />
      <Community />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
