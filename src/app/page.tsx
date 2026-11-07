
import Navigation from "@/components/Navigation";

import HeroSection from "@/components/sections/HeroSection";
import LetterSection from "@/components/sections/LetterSection";
import MemoriesSection from "@/components/sections/MemoriesSection";
import QualitiesSection from "@/components/sections/QualitiesSection";
import WishesSection from "@/components/sections/WishesSection";
import SurpriseSection from "@/components/sections/SurpriseSection";
import ClosingSection from "@/components/sections/ClosingSection";

import MusicPlayer from "@/components/MusicPlayer";

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden">
      <Navigation />

      <HeroSection />

      <LetterSection />

      <MemoriesSection />

      <QualitiesSection />

      <WishesSection />

      <SurpriseSection />

      <ClosingSection />

      <MusicPlayer />
    </main>
  );
}
