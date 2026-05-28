import Hero from "@/components/Hero";
import WorkoutPlans from "@/components/WorkoutPlans";
import VirtualNutrition from "@/components/VirtualNutrition";
import Pricing from "@/components/Pricing";
import FooterCTA from "@/components/FooterCTA";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <WorkoutPlans />
      <VirtualNutrition />
      <Pricing />
      <FooterCTA />
    </main>
  );
}
