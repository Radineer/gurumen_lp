import { HeroSection } from '@/components/sections/HeroSection';
import { ConceptSection } from '@/components/sections/ConceptSection';
import { BenefitsSection } from '@/components/sections/BenefitsSection';
import { PricingSection } from '@/components/sections/PricingSection';
import { ActivitiesSection } from '@/components/sections/ActivitiesSection';
import { SuccessStoriesSection } from '@/components/sections/SuccessStoriesSection';
import { FAQSection } from '@/components/sections/FAQSection';
import { ContactSection } from '@/components/sections/ContactSection';

export default async function Home() {
  return (
    <>
      <HeroSection />
      <ConceptSection />
      <BenefitsSection />
      <PricingSection />
      <ActivitiesSection />
      <SuccessStoriesSection />
      <FAQSection />
      <ContactSection />
    </>
  );
}
