import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import FeaturedSkills from "@/components/FeaturedSkills";
import Categories from "@/components/Categories";
import HowItWorks from "@/components/HowItWorks";
import ForDevelopers from "@/components/ForDevelopers";
import ListSkillsCTA from "@/components/ListSkillsCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0f]">
      <Navigation />
      <Hero />
      <FeaturedSkills />
      <Categories />
      <HowItWorks />
      <ForDevelopers />
      <ListSkillsCTA />
      <Footer />
    </main>
  );
}
