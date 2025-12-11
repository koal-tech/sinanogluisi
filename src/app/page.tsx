import { Hero } from "@/components/home/Hero";
import { WhyUs } from "@/components/home/WhyUs";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { Partners } from "@/components/home/Partners";
import { FAQ } from "@/components/home/FAQ";

export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      <Hero />
      <WhyUs />
      <FeaturedProducts />
      <Partners />
      <FAQ />
    </div>
  );
}
