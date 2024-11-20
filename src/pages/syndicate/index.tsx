import {
  BenefitSection,
  FAQSection,
  FeatureSection,
  HeroSection,
  SecuritySection,
} from "@features/sections/syndicate";
import S from "./index.module.scss";
import { CtaSection } from "@features/sections/cta";

const SyndicateVault = () => {
  return (
    <div className={S.body}>
      <HeroSection />
      <FeatureSection />
      <BenefitSection />
      <SecuritySection />
      <CtaSection />
      <FAQSection />
    </div>
  );
};

export default SyndicateVault;
