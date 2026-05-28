import type { Metadata } from "next";
import MembersHero from "@/components/MembersHero";
import WorkoutLibrary from "@/components/WorkoutLibrary";
import WeeklyPlans from "@/components/WeeklyPlans";
import NutritionRecovery from "@/components/NutritionRecovery";
import MindsetSection from "@/components/MindsetSection";
import MemberCheckIns from "@/components/MemberCheckIns";
import WaitlistCTA from "@/components/WaitlistCTA";
import FooterCTA from "@/components/FooterCTA";

export const metadata: Metadata = {
  title: "Members | Melaya Palo",
  description:
    "Fight camp video library, weekly training programs, nutrition guidance, mindset lessons, and member check-ins. Coming soon.",
};

export default function MembersPage() {
  return (
    <main>
      <MembersHero />
      <WorkoutLibrary />
      <WeeklyPlans />
      <NutritionRecovery />
      <MindsetSection />
      <MemberCheckIns />
      <WaitlistCTA />
      <FooterCTA />
    </main>
  );
}
